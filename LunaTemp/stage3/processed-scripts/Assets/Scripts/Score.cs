using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;

public class Score : MonoBehaviour
{
    [SerializeField] private Transform ballY;
    [Header("Portrait ve Landscape UI Textler")]
    [SerializeField] private Text portraitScoreText;
    [SerializeField] private Text landscapeScoreText;
    [SerializeField] private ParticleSystem particleEffect;
    [SerializeField] private AudioClip scoreSFX;
    public int maxScore = 5;
    public int currentScore = 0;

    private Dictionary<GameObject, bool> scoredBalls = new Dictionary<GameObject, bool>();

    void Start()
    {
        UpdateScoreText();
    }

    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Ball") && other.transform.position.y > 1.4f)
        {
            if (!scoredBalls.ContainsKey(other.gameObject) || !scoredBalls[other.gameObject])
            {
                scoredBalls[other.gameObject] = true; 

                if (currentScore < maxScore)
                {
                    AudioSource.PlayClipAtPoint(scoreSFX,gameObject.transform.position);
                    particleEffect.Play();
                    currentScore++;
                    UpdateScoreText();
                }
            }
        }
    }

    public void ResetBallState(GameObject ball)
    {
        if (scoredBalls.ContainsKey(ball))
            scoredBalls[ball] = false; 
    }

    void UpdateScoreText()
    {
        string textValue = currentScore + "/" + maxScore;

        if (portraitScoreText != null)
            portraitScoreText.text = textValue;

        if (landscapeScoreText != null)
            landscapeScoreText.text = textValue;
    }
}
