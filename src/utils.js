function IdIsValid(selector) {
    return $(`#${selector}`).length > 0;
}

function TryToGetTitle(selector) {
    return $(`#${selector}`).attr('title') !== undefined && $(`#${selector}`).attr('title') !== false ? $(`#${selector}`).attr('title') : selector;
}

window.IdIsValid = IdIsValid;
window.TryToGetTitle = TryToGetTitle;