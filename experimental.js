    function foo(callback) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4) { // request is done
                if (httpRequest.status === 200) { // successfully
                    callback(httpRequest.responseText); // we're calling our method
                    return httpRequest.responseText;
                }
            }
        };
        httpRequest.open('GET', "https://jsonplaceholder.typicode.com/todos/1");
        httpRequest.send();
        return httpRequest.responseText;
    }

    foo(function (result) {
        document.body.innerHTML = result;
        console.log('Test' + result);
    });