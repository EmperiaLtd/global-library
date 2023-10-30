function Analytics_SelectContent(type, id, room = "undefined room") {
    if (typeof dataLayer === 'undefined') return;
    dataLayer.push({
        'event': 'select_content',
        'content_type': type,
        'item_id': id,
        'room_name': room
    });
}

function Analytics_Share(method, content_type, item_id) {
    if (typeof dataLayer === 'undefined') return;
    dataLayer.push({
        "event": "share",
        'method': method,
        'content_type': content_type,
        'item_id': item_id,
    });
}

function Analytics_AddToCart(currency, value, item_id) {
    if (typeof dataLayer === 'undefined') return;
    dataLayer.push({
        "event": "add_to_cart",
        'currency': currency,
        'value': value,
        'item_id': item_id
    });
}

function Analytics_OnPanoramaLoaded(position, room = "undefined room", room_aggregator, market, locale) {
    if (typeof dataLayer === 'undefined') return;
    if(room_aggregator == null || room_aggregator == 'None'){
        room_aggregator = position.split('_')[0];
    }
    const analytics_object = {
        'event': 'move_to',
        'position': position,
        'room_name': room,
        'room_aggregrator': room_aggregator
    }
    pushToAnlaytics(analytics_object, market, locale)
}

function pushToAnlaytics(object, market, locale){
    // picks market and locale from URL and fallback to default params set in
    // onnewpano event in vtourskin_emperia.xml
    const url = window.location.href;
    const params = new URLSearchParams(url);
    if (window.locale) {
        object.market = window.locale.split('-')[1];
        object.locale = window.locale.split('-')[0];
    } else {
        object['market'] = params.has('market') ? params.get('market') : market;
        object['locale'] = params.has('locale') ? params.get('locale') : locale;
    }
    if (window.mixpanel != undefined && window.mixpanel.track) window.mixpanel.track(object.event, Object.create(object));
    if (window.emperiaTag != undefined) window.emperiaTag.pushEvent(object);
    else {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(object);
    }
}
window.Analytics_SelectContent = Analytics_SelectContent;
window.Analytics_Share = Analytics_Share;
window.Analytics_AddToCart = Analytics_AddToCart;
window.Analytics_OnPanoramaLoaded = Analytics_OnPanoramaLoaded;