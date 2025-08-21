using UnityEngine;
using System.Collections;

public class BallSpawner : MonoBehaviour
{
    [SerializeField] private GameObject firstBall;
    [SerializeField] private Rigidbody2D firstBallRb;
    [SerializeField] private DragThrow firstBallDragThrow;
    [SerializeField] private Depth firstBallDepth;

    GameObject currentBall;
    Rigidbody2D currentRb;
    DragThrow currentDragThrow;
    Depth currentDepth;
    Camera cam;

    int resetCount;
    private const int MaxResets = 9;
    private const float ReturnDelay = 0.1f;

    void Awake()
    {
        if (GetComponent<Rigidbody2D>()) { enabled = false;}
    }   

    void Start()
    {
        cam = Camera.main;
        AssignBall(firstBall, firstBallRb, firstBallDragThrow, firstBallDepth);
        StartCoroutine(Run());
    }

    void AssignBall(GameObject ball, Rigidbody2D rb, DragThrow drag, Depth depth)
    {
        currentBall = ball;
        currentRb = rb;
        currentDragThrow = drag;
        currentDepth = depth;
    }

    IEnumerator Run()
    {
        while (currentBall)
        {
            while (!currentRb || !currentRb.simulated || currentRb.velocity.sqrMagnitude <= 0.01f)
                yield return null;

            while (!IsOutOfView(currentBall.transform.position))
                yield return null;

            yield return new WaitForSeconds(ReturnDelay);

            if (resetCount < MaxResets)
            {
                if (currentDragThrow)
                    currentDragThrow.ResetBall(new Vector3(0f, -3.58f, -3f));
                else
                {
                    currentRb.simulated = false;
                    currentRb.velocity = Vector2.zero;
                    currentBall.transform.position = new Vector3(0f, -3.58f, -3f);
                }

                Score score = FindObjectOfType<Score>();
                if (score != null)
                {
                    score.ResetBallState(currentBall); 
                }

                if (currentDepth != null)
                {
                    currentDepth.ResetNetColliders();
                    currentDepth.ResetSortingOrder();
                }

                resetCount++;
            }
            else
            {
                Destroy(currentBall);
                yield break;
            }
        }
    }

    bool IsOutOfView(Vector3 pos)
    {
        if (!cam) return false;
        var v = cam.WorldToViewportPoint(pos);
        return v.z < 0f || v.x < -0.1f || v.x > 1.1f || v.y < -0.1f || v.y > 1.1f;
    }
}
