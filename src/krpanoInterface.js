function OnPanoLoad(room_aggregator = "None", market = "eu", locale = "en") {
    krpano = document.getElementById("krpanoSWFObject");
    currentSceneName = krpano.get('xml.scene');
    currentSceneXml = krpano.get('scene[' + currentSceneName + ']');
    currentSceneRoom = currentSceneXml.room;
    Analytics_OnPanoramaLoaded(currentSceneName, currentSceneRoom, room_aggregator, market, locale);
}

window.OnPanoLoad = OnPanoLoad;