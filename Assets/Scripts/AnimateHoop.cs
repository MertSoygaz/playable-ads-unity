using UnityEngine;
using System.Collections;

public class AnimateHoop : MonoBehaviour
{
    [SerializeField] private Transform net;
    [SerializeField] private Transform board;

    private float timeToRight;
    private float timeRightToLeft;
    private float moveRange;
    

    private Coroutine animateCo;

    void Start()
    {
        bool isPortrait = Screen.height > Screen.width;

        if (isPortrait)
        {
            timeToRight = 0.75f;
            timeRightToLeft = 1.5f;
        }
        else
        {
            timeToRight = 3.75f;
            timeRightToLeft = 7.5f;
        }

        float camHalfWidth = Camera.main.orthographicSize * Camera.main.aspect;
        moveRange = camHalfWidth - 1f;

        animateCo = StartCoroutine(Animate());
    }

    private IEnumerator Animate()
    {
        Vector3 startNetPos = net.position;
        Vector3 startBoardPos = board.position;

        // İlk başta X = 0’dan başlasın
        net.position = new Vector3(0f, startNetPos.y, startNetPos.z);
        board.position = new Vector3(0f, startBoardPos.y, startBoardPos.z);

        // İlk sağa gidiş
        yield return MoveBoth(net, board, moveRange, timeToRight);

        // Sonsuz sağ-sol döngüsü
        while (true)
        {
            yield return MoveBoth(net, board, -moveRange, timeRightToLeft);
            yield return MoveBoth(net, board, moveRange, timeRightToLeft);
        }
    }

    private IEnumerator MoveBoth(Transform t1, Transform t2, float targetX, float duration)
    {
        Vector3 start1 = t1.position;
        Vector3 start2 = t2.position;

        Vector3 end1 = new Vector3(targetX, start1.y, start1.z);
        Vector3 end2 = new Vector3(targetX, start2.y, start2.z);

        float t = 0f;

        while (t < duration)
        {
            t += Time.deltaTime;
            float u = Mathf.Clamp01(t / duration); // Linear ease
            t1.position = Vector3.Lerp(start1, end1, u);
            t2.position = Vector3.Lerp(start2, end2, u);
            yield return null;
        }

        t1.position = end1;
        t2.position = end2;
    }

    void OnDestroy()
    {
        if (animateCo != null)
            StopCoroutine(animateCo);
    }
}
