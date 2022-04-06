function IdIsValid(selector) {
  return $(`#${selector}`).length > 0;
}

function TryToGetTitle(selector) {
  return $(`#${selector}`).attr('title') !== undefined && $(`#${selector}`).attr('title') !== false ? $(`#${selector}`).attr('title') : selector;
}

function HotspotAnalytics(scene) {
  SendGAEvent("moveTo", "hotspot", scene);
}

function SendGAEvent(name, event_category, event_label) {
  console.log(event_label);
  if (typeof gtag === "function") gtag("event", name, {
    event_category: event_category,
    event_label: event_label,
  });
  else console.warn("gtag does not exist.");
}


window.IdIsValid = IdIsValid;
window.TryToGetTitle = TryToGetTitle;
window.HotspotAnalytics = HotspotAnalytics;
window.SendGAEvent = SendGAEvent;
