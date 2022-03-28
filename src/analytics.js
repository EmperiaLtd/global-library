export function Analytics_SelectContent(type, id) {
    dataLayer.push({
        'event': 'select_content',
        'content_type': type,
        'item_id': id
    });
}

export function Analytics_Share(method, content_type, item_id) {
    dataLayer.push({
        "event": "share",
        'method': method,
        'content_type': content_type,
        'item_id': item_id,
    });
}

export function Analytics_AddToCart(currency, value, item_id) {
    dataLayer.push({
        "event": "add_to_cart",
        'currency': currency,
        'value': value,
        'item_id': item_id
    });
}

export function Analytics_MoveTo(position) {
    dataLayer.push({
        'event': 'move_to',
        'position': position
    });
}