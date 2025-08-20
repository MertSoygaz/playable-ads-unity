using UnityEngine;
using System.Collections; 

public class LevelFailManager : MonoBehaviour
{
    [SerializeField] private GameObject content;
    [SerializeField] private Score score;
    [SerializeField] private CanvasGroup canvasGroup;
    [SerializeField] private GameObject ball;

    private bool hasFaded = false; 

    private void Start()
    {
        canvasGroup.alpha = 0f;
        content.SetActive(false);
        CheckOrientationAndDoAction(); 
    }

    private void Update()
    {
        CheckOrientationAndDoAction();
    }

    private void CheckOrientationAndDoAction()
    {
        if (ball == null && score.currentScore != score.maxScore && !hasFaded)
        {
            hasFaded = true;
            content.SetActive(true);
            StartCoroutine(FadeCanvas(canvasGroup, 1f, 1f));
            Luna.Unity.Analytics.LogEvent("PlayerLost", 0);
        }
    }

    private IEnumerator FadeCanvas(CanvasGroup cg, float targetAlpha, float duration)
    {
        float startAlpha = cg.alpha;
        float t = 0f;

        while (t < duration)
        {
            t += Time.deltaTime;
            float u = Mathf.Clamp01(t / duration); 
            cg.alpha = Mathf.Lerp(startAlpha, targetAlpha, u);
            yield return null;
        }

        cg.alpha = targetAlpha; 
    }
}
