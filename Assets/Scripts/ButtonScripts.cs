using UnityEngine;
using Luna.Unity;
public class ButtonScripts : MonoBehaviour
{
    public void OnInstallClicked()
    {
        Playable.InstallFullGame();
        Analytics.LogEvent("User completed level and CTA", 1);
    }

    public void TryAgainAndOnInstall()
    {
        Playable.InstallFullGame();
        Analytics.LogEvent("User failed level and CTA", 0);
        LifeCycle.GameEnded();
    }
}
