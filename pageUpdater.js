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



var htmlChanger = (function() {

    var h = "Hello ", w = "World!", contents = h;

    // update page after loading json data
    contentLoader.loadJson('test.json', function(err, datums) {
        if (err) { throw err; }           
         document.getElementById('elem').innerHTML = datums['members'][1].name;        
    });
    
    document.getElementById('elem').innerHTML = "Hello";


    var changeHTML = function () {
        contents = contentLoader.getString();
        var el = document.getElementsByTagName('body')[0];
        el.innerHTML = contents;
        console.log('Cont', contents);
    }

    return {
        first: changeHTML
    }
})();

//htmlChanger.first(); // "Hello"