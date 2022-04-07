function OnPanoLoad() {
    krpano = document.getElementById("krpanoSWFObject");
    currentSceneName = krpano.get('xml.scene');
    currentSceneXml = krpano.get('scene[' + currentSceneName + ']');
    currentSceneRoom = currentSceneXml.thumburl;
    Analytics_MoveTo(currentSceneName, currentSceneRoom);
}

window.OnPanoLoad = OnPanoLoad;