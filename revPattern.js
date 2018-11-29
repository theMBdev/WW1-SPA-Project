/*
a ‘slide’ manager module: used to display ‘slides’ from a collection of ‘slides’ with
appropriate controls for first, last, next, previous, goto slide number; where a ‘slide’
can be a graphic image or a pdf or just a page of text from a collection of
images/pdfs/text/events pages
*/
var slideModule = (function(){


    return {


    }    

})();

/*
a content loader module that loads the appropriate content and passes control over
to the appropriate display routine eg the slide manager; the page updater etc
*/
var contentLoader = (function() {     

    var testString = 'BooYaa';
    
    var getString = function() {        
        console.log("test", testString);
    }
    
    //load content 
    var loadJson = function (jsonFile) {  

        // Get json data
        var request = new XMLHttpRequest();
        
        request.open('GET', jsonFile);

        request.responseType = 'json';
        request.send();        

        request.onload = function() {
            console.log('HomeTown: ' + request.response['homeTown']);
        }   
        
        //send the data stored in request.response to the page loader

    }
    
    return {
        loadJson : loadJson,
        getString : getString,
    }    

})();

contentLoader.loadJson('test.json');
contentLoader.getString();

/*
a page updating module that puts the actual content on to the page
*/
var pageUpdater = (function(){

//    var header = document.querySelector('header');
//
//    // pass json data in from contentLoader
//    var data = contentLoader.loadJson('test.json');
//    console.log('data sent', data);
//
//    // update dom
//    function populateHeader(jsonObj) {
//        var h = "Hello ", w = "World!", contents = h;
//        
//        var changeHTML = function () {
//            contents = h;           
//            var el = document.getElementsByTagName('body')[0];
//            el.innerHTML = contents;
//          
//        }
//
//
//        return {
//            populateHeader: populateHeader
//        }    
//    }

})();

/*
a menu manager module that allows the user to navigate around your spa
*/
var menuManager = (function(){


    return {


    }    

})();

/*
a search manager module that can find ‘content’ and then passes it to the page
updater to display
*/
var searchManager = (function(){


    return {


    }    

})();

// other


//// example
//var htmlChanger = (function() {
//
//    var h = "Hello ", w = "World!", contents = h;
//
//    var changeHTML = function () {
//        contents = h;
//        var el = document.getElementsByTagName('body')[0];
//        el.innerHTML = contents;
//        console.log(contents);
//    }
//
//    return {
//        first: changeHTML
//    }
//})();

//htmlChanger.first(); // "Hello"
