export function getData(url, method, callback) {
    let data;
    const request = new XMLHttpRequest();
    request.open(method, url);

    request.addEventListener('load', function(data) {
        if (request.responseText) {
            data = JSON.parse(request.responseText)
            callback(data)
        }
    });
    request.send()
}