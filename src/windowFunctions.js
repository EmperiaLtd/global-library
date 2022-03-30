function OpenWindow(selector, duration = 200, ease = "linear", custom_label = "") {
  if (IdIsValid(selector)) {
    SendGAEvent("open", "window",
      custom_label === "" ? TryToGetTitle(selector) : custom_label);
    OpenWindowUI(selector, duration, ease);
  } else console.warn(`Could not find ${selector}`);
}

function OpenWindowUI(selector, duration = 200, ease = "linear") {
  $(`#${selector}`).fadeIn(duration, ease);
}

function CloseWindow(selector, duration = 200, ease = "linear") {
  if (IdIsValid(selector)) {
    CloseWindowUI(selector, duration, ease);
  } else console.warn(`Could not find ${selector}`);
}

function CloseWindowUI(selector, duration = 200, ease = "linear") {
  $(`#${selector}`).fadeOut(duration, ease);
}

function ToggleWindow(selector, duration = 200, ease = "linear") {
  if (IdIsValid(selector)) {
    if ($(`#${selector}`).css("display") === "none")
      OpenWindow(selector, duration, selector);
    else CloseWindow(selector, duration, ease);
  } else console.warn(`Could not find ${selector}`);
}
