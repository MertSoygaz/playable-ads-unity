using UnityEngine;

public class CameraBoundsColliders : MonoBehaviour
{
    public Camera cam;
    public BoxCollider2D topCollider;
    public BoxCollider2D leftCollider;
    public BoxCollider2D rightCollider;

    void UpdateBounds()
    {
        // Kameranýn dünyadaki boyutlarýný al
        float height = cam.orthographicSize * 2f;
        float width = height * cam.aspect;

        // Kameranýn merkez noktasý
        Vector3 camPos = cam.transform.position;

        // Top collider pozisyon
        topCollider.size = new Vector2(width, 1f); 
        topCollider.transform.localPosition = new Vector3(camPos.x, camPos.y + (height / 2f) + topCollider.size.y/2f, 0);
        topCollider.offset = Vector2.zero;


        // Left collider pozisyon
        leftCollider.size = new Vector2(1f, height);
        leftCollider.transform.localPosition = new Vector3(camPos.x - (width / 2f) - leftCollider.size.x / 2, camPos.y, 0);
        leftCollider.offset = Vector2.zero;

        // Right collider pozisyon
        rightCollider.size = new Vector2(1f, height);
        rightCollider.transform.localPosition = new Vector3(camPos.x + (width / 2f) + rightCollider.size.x/2, camPos.y, 0);
        rightCollider.offset = Vector2.zero;
    }

    void Start()
    {
        UpdateBounds();
    }
}
