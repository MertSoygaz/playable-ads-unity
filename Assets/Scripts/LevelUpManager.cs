using UnityEngine;
using System.Collections; 

public class LevelUpManager : MonoBehaviour
{
    [SerializeField] private GameObject content;
    [SerializeField] private Score score;
    [SerializeField] private CanvasGroup canvasGroup;

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
        bool isLevelComplete = score.currentScore == score.maxScore;

        if (isLevelComplete && !hasFaded)
        {
            hasFaded = true;
            content.SetActive(true);
            StartCoroutine(FadeCanvas(canvasGroup, 1f, 1f)); 
            Luna.Unity.Analytics.LogEvent("PlayerWon", 1);
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
