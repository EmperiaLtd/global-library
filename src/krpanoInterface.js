function OnPanoLoad() {
    krpano = document.getElementById("krpanoSWFObject");
    currentSceneName = krpano.get('xml.scene');
    currentSceneXml = krpano.get('scene[' + currentSceneName + ']');
    currentSceneRoom = currentSceneXml.room;
    Analytics_OnPanoramaLoaded(currentSceneName, currentSceneRoom);
}

window.OnPanoLoad = OnPanoLoad;