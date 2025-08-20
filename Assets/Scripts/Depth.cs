using UnityEngine;

public class Depth : MonoBehaviour
{
    [SerializeField] private Rigidbody2D ballRb;
    [SerializeField] private SpriteRenderer board;
    [SerializeField] private SpriteRenderer net;
    [SerializeField] private SpriteRenderer ball;

    readonly float minY = -3.58f;
    readonly float maxY = 5f;
    readonly float maxScale = 0.22f;
    readonly float minScale = 0.18f;

    Collider2D[] netColliders;

    readonly int backOrder = 0;
    readonly int midOrder = 1;
    readonly int frontOrder = 2;

    float prevY;
    float currentScale;
    bool forceColliderOff = true;

    void Awake()
    {
        if (!ballRb) ballRb = GetComponent<Rigidbody2D>();
        if (!ball) ball = GetComponent<SpriteRenderer>(); 
        if (net) netColliders = net.GetComponents<Collider2D>();
    }

    void Start()
    {
        float t0 = Mathf.InverseLerp(minY, maxY, transform.position.y);
        currentScale = Mathf.Lerp(maxScale, minScale, t0);
        transform.localScale = new Vector3(currentScale, currentScale, 1f);
        prevY = transform.position.y;

        ResetNetColliders();
        ResetSortingOrder();
    }

    void LateUpdate()
    {
        float t = Mathf.InverseLerp(minY, maxY, transform.position.y);
        float target = Mathf.Lerp(maxScale, minScale, t);
        currentScale = Mathf.Min(currentScale, target);
        transform.localScale = new Vector3(currentScale, currentScale, 1f);

        float vy = ballRb ? ballRb.velocity.y : (transform.position.y - prevY) / Mathf.Max(Time.deltaTime, 0.0001f);

        if (forceColliderOff)
        {
            SetNetColliders(false);
            if (vy > 0.001f) forceColliderOff = false;
        }
        else if (vy > 0.001f)
        {
            board.sortingOrder = backOrder;
            net.sortingOrder = midOrder;
            ball.sortingOrder = frontOrder;
            SetNetColliders(false);
        }
        else if (vy < -0.001f)
        {
            board.sortingOrder = backOrder;
            ball.sortingOrder = midOrder;
            net.sortingOrder = frontOrder;
            SetNetColliders(true);
        }

        prevY = transform.position.y;
    }

    public void ResetNetColliders()
    {
        SetNetColliders(false);
        forceColliderOff = true;
    }

    public void ResetSortingOrder()
    {
        board.sortingOrder = backOrder;
        net.sortingOrder = midOrder;
        ball.sortingOrder = frontOrder;
    }

    void SetNetColliders(bool enabled)
    {
        if (netColliders == null) return;
        for (int i = 0; i < netColliders.Length; i++)
            netColliders[i].enabled = enabled;
    }
}
