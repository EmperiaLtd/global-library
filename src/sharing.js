$(document).ready(function() {
    $(".shareButton").click(function(e) {
        var viewParams = getKrpanoViewParameters();
        var url = viewParams ?
            `${window.location.href.split("?")[0]}?${jQuery.param(viewParams)}` :
            window.location.href.split("?")[0];
        if (navigator.share) {
            navigator.share({
                    title: `Experience the ${document.title} with me.`,
                    url: url,
                })
                .then(() => Analytics_Share("share button", "website", "website"))
                .catch((error) => console.log('Sharing failed', error));
        } else {
            console.warn("Could not find navigator, copying to clipboard.");
            if (!navigator.clipboard) {
                window.prompt("Copy to clipboard: Ctrl+C, Enter", url);
            } else {
                navigator.clipboard.writeText(window.location.href);
            }
        }
    });
});