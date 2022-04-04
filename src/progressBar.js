function ShowProgressBar() {
  progressBar = document.getElementById("progress-bar");
  progressBar.style.visibility = "visible";
}

function HideProgressBar() {
  progressBar = document.getElementById("progress-bar");
  progressBar.style.visibility = "hidden";
}

function UpdateProgressBar(value) {
  progressBar = document.getElementById("progress-bar");
  progressBar.value = Math.round(value * 100);
}

window.ShowProgressBar = ShowProgressBar;
window.HideProgressBar = HideProgressBar;
window.UpdateProgressBar = UpdateProgressBar;

