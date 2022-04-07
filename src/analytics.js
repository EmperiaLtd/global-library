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

function Analytics_OnPanoramaLoaded(position, room = "undefined room") {
    if (typeof dataLayer === 'undefined') return;
    dataLayer.push({
        'event': 'move_to',
        'position': position,
        'room_name': room
    });
}

window.Analytics_SelectContent = Analytics_SelectContent;
window.Analytics_Share = Analytics_Share;
window.Analytics_AddToCart = Analytics_AddToCart;
window.Analytics_OnPanoramaLoaded = Analytics_OnPanoramaLoaded;