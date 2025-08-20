using UnityEngine;

public class SpriteSheetAnimation : MonoBehaviour
{
    public Sprite[] frames;
    public float fps = 30f;
    private SpriteRenderer sr;
    private int index;
    private float timer;

    void Start()
    {
        sr = GetComponent<SpriteRenderer>();
    }

    void Update()
    {
        timer += Time.deltaTime;
        if (timer >= 1f / fps)
        {
            timer = 0f;
            index = (index + 1) % frames.Length;
            sr.sprite = frames[index];
        }
    }
}
