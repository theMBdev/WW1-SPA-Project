var request = new XMLHttpRequest();
var header = document.querySelector('header');
var section = document.querySelector('section');

var contentLoader = (function(){
    console.log("contentLoader");
    //get json content
    //        var requestURL = 'test.json';
    var localJson = 'test.json';
    // Get json data
   
    request.open('GET', localJson);

    request.responseType = 'json';
    request.send();

    getWarHero = function (callback) {
        $.getJSON(localJson, function (data) {
            callback(data);
            console.log( "TESTING JSON Data received, hometown is " + data.homeTown);
        });
    };


    return {
        getWarHero : getWarHero,
//        getWepons : getWepons
    }
})();

var pageUpdater = (function(){
 console.log("pageUpdater");
    //update page with content from content loader
    request.onload = function() {
        console.log("pageUpdater on load");
        var superHeroes = request.response;
        populateHeader(superHeroes);        
    }


    return {

    }
})();

//renderAccountTiles = function (data) {
//    $('div.tile[id^="Account"]').each(function () {
//        sceneStateManager.renderTile(data, $(this), 500);
//    });
//}

// Create page War Heroes function
populatePage = function (jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['homeTown'];
    header.appendChild(myH1);

    console.log("do i run twice");
    
    var myPara = document.createElement('p');
    myPara.textContent = 'Name: ' + jsonObj['members'][0].name + ' // Age: ' + jsonObj['members'][0].age;
    header.appendChild(myPara);
}


contentLoader.getWarHero(populateHeader);