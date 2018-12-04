/*
a page updating module that puts the actual content on to the page
*/
var pageUpdater = (function(){

    function getPage(page) {
        var request = new XMLHttpRequest();

        var section = document.querySelector('section'); 

        console.log("Page: ",page);

        //loadpage to viewer
        request.onreadystatechange = function() {
            if(this.readyState ==4 && this.status == 200) {            

                var myDiv = document.getElementById('viewer');
                myDiv.innerHTML = this.responseText;

                var myScripts = myDiv.getElementsByTagName("script");
                if (myScripts.length > 0) {
                    eval(myScripts[0].innerHTML);
                }
            }
        }

        request.open('GET', page, true);
        request.send();

    }
    return {
        getPage: getPage
    }    


})();








//var htmlChanger = (function() {
//
//    var h = "Hello ", w = "World!", contents = h;
//
//    // update page after loading json data
//    contentLoader.loadJson('test.json', function(err, datums) {
//        if (err) { throw err; }           
//         document.getElementById('elem').innerHTML = datums['members'][1].name;        
//    });
//    
//    document.getElementById('elem').innerHTML = "Hello";
//    
//
//    var changeHTML = function () {
//        contents = contentLoader.getString();
//        var el = document.getElementsByTagName('body')[0];
//        el.innerHTML = contents;
//        console.log('Cont', contents);
//    }
//
//    return {
//        first: changeHTML
//    }
//})();

//should be a function of 
// changes the page. call this after page is created? need page builder?








