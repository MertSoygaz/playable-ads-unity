using UnityEngine;

public class DragThrow : MonoBehaviour
{
    public Rigidbody2D rb;
    public Collider2D touchArea;
    public float forceMultiplier = 8f;
    public float maxSpeed = 18f;
    public float arcBoost = 3f;
    public float minDragDist = 0.15f;

    Vector2 dragStart;
    bool dragging;
    bool thrown;
    Camera cam;

    void Start()
    {
        cam = Camera.main;
        rb.simulated = false;
        rb.velocity = Vector2.zero;
    }

    void Update()
    {
        if (thrown) return;

        if (!TryGetPointer(out bool began, out bool ended, out Vector2 worldPos))
            return;

        if (began)
        {
            if (touchArea && !touchArea.OverlapPoint(worldPos)) return;
            dragging = true;
            dragStart = worldPos;
        }
        else if (ended && dragging)
        {
            dragging = false;
            Vector2 dragVec = worldPos - dragStart;
            if (dragVec.magnitude < minDragDist) return;

            Vector2 dir = dragVec.normalized;
            float speed = Mathf.Min(dragVec.magnitude * forceMultiplier, maxSpeed);
            Vector2 v = dir * speed;
            v.y += arcBoost;

            rb.simulated = true;
            rb.velocity = v;
            thrown = true;
        }
    }

    bool TryGetPointer(out bool began, out bool ended, out Vector2 worldPos)
    {
        began = ended = false;
        Vector2 screenPos = Vector2.zero;

#if UNITY_EDITOR || UNITY_STANDALONE
        began = Input.GetMouseButtonDown(0);
        ended = Input.GetMouseButtonUp(0);
        screenPos = Input.mousePosition;
        if (!(began || ended)) return Fail(out worldPos);
#else
        if (Input.touchCount == 0) return Fail(out worldPos);
        var t = Input.GetTouch(0);
        began = t.phase == TouchPhase.Began;
        ended  = t.phase == TouchPhase.Ended || t.phase == TouchPhase.Canceled;
        screenPos = t.position;
        if (!(began || ended)) return Fail(out worldPos);
#endif
        if (!cam.pixelRect.Contains(screenPos) || !float.IsFinite(screenPos.x) || !float.IsFinite(screenPos.y))
            return Fail(out worldPos);

        worldPos = cam.ScreenToWorldPoint(screenPos);
        return true;
    }

    bool Fail(out Vector2 pos) { pos = Vector2.zero; return false; }

    public void ResetBall(Vector3 pos)
    {
        transform.position = pos;
        rb.simulated = false;
        rb.velocity = Vector2.zero;
        dragging = false;
        thrown = false;
    }
}
