/*
a content loader module that loads the appropriate content and passes control over
to the appropriate display routine eg the slide manager; the page updater etc
*/
var contentLoader = (function() {     

    //load content 
    var loadJson = function (jsonFile, done) {  

        // Get json data
        var request = new XMLHttpRequest();        
        request.open('GET', jsonFile);
        request.responseType = 'json';

        request.onload = function() {
            //callback
            done(null, request.response);
            return request.response;
        };

        request.onerror = function() {
            //callback
            done(request.response);
        };

        request.send();
    }   

    return {
        loadJson : loadJson
    } 
})();
