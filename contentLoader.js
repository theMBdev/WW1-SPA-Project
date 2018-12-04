/*
a content loader module that loads the appropriate content and passes control over
to the appropriate display routine eg the slide manager; the page updater etc
*/
var contentLoader = (function() {     

//
//    var getString = function() {        
//        console.log("test", testString);        
//        testString = {
//            test: 'str'
//        };
//        console.log('My test', testString.test);
//        var myJSON = JSON.stringify(testString);
//        console.log('My Json', myJSON);
//        return testString;
//    }

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
        loadJson : loadJson,
//        getString : getString
    } 
})();

contentLoader.loadJson('test.json', function(err, datums) {
    if (err) { throw err; }    

    console.log('Outside', datums['members'][1].name);
});

//console.log('CONSOLE',contentLoader.getString());


