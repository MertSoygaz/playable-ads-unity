using UnityEngine;

public class OrientationManager : MonoBehaviour
{
    [SerializeField] private GameObject portraitUI;   
    [SerializeField] private GameObject landscapeUI;  

    private bool isPortrait;

    void Start()
    {
        CheckOrientation();
    }

    void Update()
    {
        if ((Screen.width > Screen.height && isPortrait) ||
            (Screen.width < Screen.height && !isPortrait))
        {
            CheckOrientation();
        }
    }

    void CheckOrientation()
    {
        isPortrait = Screen.height >= Screen.width;        

        if (isPortrait)
        {
            portraitUI.SetActive(true);
            landscapeUI.SetActive(false);
            Luna.Unity.Analytics.LogEvent("PortraitMode", 1);
        }
        else
        {
            portraitUI.SetActive(false);
            landscapeUI.SetActive(true);
            Luna.Unity.Analytics.LogEvent("Landscape", 0);
        }
    }
}
