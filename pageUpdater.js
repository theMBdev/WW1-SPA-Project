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

// changes the page. call this after page is created? need page builder?
function getPage(page) {
    var xhttpReq = new XMLHttpRequest();

    var section = document.querySelector('section'); 

    console.log("Page: ",page);

    if (page == "warheroes.html") {
        // War Hero Page Loader
        contentLoader.loadJson('test.json', function(err, datums) {
            if (err) { throw err; }   
            console.log("HERE IS LANCHED")
            document.getElementById('elem').innerHTML = datums['members'][1].name; 


            // create warhero page
            function showHeroes(jsonObj) {

                var heroes = jsonObj['members'];
                
                console.log("heroJson", heroes)

                for (var i = 0; i < heroes.length; i++) {
                    var myArticle = document.createElement('article');
                    var myH2 = document.createElement('h2');
                    var myPara1 = document.createElement('p');
                    var myPara2 = document.createElement('p');
                    var myPara3 = document.createElement('p');
                    var myList = document.createElement('ul');

                    myH2.textContent = heroes[i].name;
                    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
                    myPara2.textContent = 'Age: ' + heroes[i].age;
                    myPara3.textContent = 'Superpowers:';

                    var superPowers = heroes[i].powers;
                    for (var j = 0; j < superPowers.length; j++) {
                        var listItem = document.createElement('li');
                        listItem.textContent = superPowers[j];
                        myList.appendChild(listItem);
                    }

                    myArticle.appendChild(myH2);
                    myArticle.appendChild(myPara1);
                    myArticle.appendChild(myPara2);
                    myArticle.appendChild(myPara3);
                    myArticle.appendChild(myList);

                    section.appendChild(myArticle);
                }
            } 
            //make clear page function
            section.innerHTML = "";
            showHeroes(datums);
        });

    }
    else if (page == "weponsofwar.html") {
             console.log("Woop");
        
        contentLoader.loadJson('wepons.json', function(err, datums) {
            if (err) { throw err; }   
            
            document.getElementById('elem').innerHTML = datums['guns'][1].name;
            
            // create wepons of war page
            function showGuns(jsonObj) {

                var weponsJson = jsonObj['guns'];

                console.log("WeponJson", weponsJson)
                    
                for (var i = 0; i < weponsJson.length; i++) {
                    var myArticle = document.createElement('article');
                    var myH2 = document.createElement('h2');
                                       

                    myH2.textContent = weponsJson[i].name;                    
                    
                    myArticle.appendChild(myH2);

                    section.appendChild(myArticle);
                }
            } 
            //make clear page function
            section.innerHTML = "";
            showGuns(datums);
        });                        
     
        
        
    }
    else {
        //make clear page function
        section.innerHTML = "";
    }

    //loadpage to viewer
    xhttpReq.onreadystatechange = function() {
        if(this.readyState ==4 && this.status == 200) {
            document.getElementById('viewer').innerHTML = this.responseText;
        }
    }

    xhttpReq.open('GET', page, true);
    xhttpReq.send();
}





