using UnityEngine;
using System.Collections;
using Luna.Unity; // PlaygroundField için

public class HandAnimation : MonoBehaviour
{
    private SpriteRenderer spriteRenderer;

    [LunaPlaygroundField("Move Duration")]
    [SerializeField] private float moveDuration = 1.5f;

    [LunaPlaygroundField("Fade Duration")]
    [SerializeField] private float fadeDuration = 0.3f;

    [LunaPlaygroundField("Start Y")]
    [SerializeField] private float startY = -4f;

    [LunaPlaygroundField("End Y")]
    [SerializeField] private float endY = -1f;

    private Coroutine loopCo;
    private bool isStopping;

    void Start()
    {
        spriteRenderer = GetComponent<SpriteRenderer>();

        // Baþlangýç konumu
        var lp = transform.localPosition;
        transform.localPosition = new Vector3(lp.x, startY, lp.z);

        // Tam görünür baþlasýn
        var c = spriteRenderer.color;
        spriteRenderer.color = new Color(c.r, c.g, c.b, 1f);

        loopCo = StartCoroutine(AnimateLoop());
    }

    void Update()
    {
        if (Input.GetMouseButtonUp(0) ||
           (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Ended))
        {
            StopAndDestroy();
        }
    }

    private IEnumerator AnimateLoop()
    {
        while (true)
        {
            yield return MoveLocalY(endY, moveDuration);
            yield return FadeToAlpha(0f, fadeDuration);
            var lp = transform.localPosition;
            transform.localPosition = new Vector3(lp.x, startY, lp.z);
            yield return FadeToAlpha(1f, fadeDuration);
        }
    }

    private IEnumerator MoveLocalY(float targetY, float duration)
    {
        float t = 0f;
        Vector3 startPos = transform.localPosition;
        Vector3 endPos = new Vector3(startPos.x, targetY, startPos.z);

        while (t < duration)
        {
            t += Time.deltaTime;
            float u = Mathf.Clamp01(t / duration);
            transform.localPosition = Vector3.Lerp(startPos, endPos, u);
            yield return null;
        }

        transform.localPosition = endPos;
    }

    private IEnumerator FadeToAlpha(float targetAlpha, float duration)
    {
        float t = 0f;
        Color start = spriteRenderer.color;
        float startA = start.a;

        while (t < duration)
        {
            t += Time.deltaTime;
            float u = Mathf.Clamp01(t / duration);
            float a = Mathf.Lerp(startA, targetAlpha, u);
            spriteRenderer.color = new Color(start.r, start.g, start.b, a);
            yield return null;
        }

        spriteRenderer.color = new Color(start.r, start.g, start.b, targetAlpha);
    }

    public void StopAndDestroy()
    {
        if (isStopping) return;
        isStopping = true;

        if (loopCo != null)
            StopCoroutine(loopCo);

        StartCoroutine(DestroyAfterFade());
    }

    private IEnumerator DestroyAfterFade()
    {
        yield return FadeToAlpha(0f, fadeDuration);
        Destroy(gameObject);
    }
}
