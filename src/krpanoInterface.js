function OnPanoLoad() {
    krpano = document.getElementById("krpanoSWFObject");
    currentSceneName = krpano.get('xml.scene');
    currentSceneXml = krpano.get('scene[' + currentSceneName + ']');
    currentSceneRoom = currentSceneXml.thumburl;
    Analytics_OnPanoramaLoaded(currentSceneName, currentSceneRoom);
}

window.OnPanoLoad = OnPanoLoad;