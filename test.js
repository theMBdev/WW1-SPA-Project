$.getJSON( "test.json", function( json ) {
    console.log( "JSON Data received, name is " + json.name, " age is ", json.age);
});

        var header = document.querySelector('header');
        var section = document.querySelector('section');        
        
        var requestURL = 'test.json';
        // Get json data
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);

        request.responseType = 'json';
        request.send();
        
        // load created page by calling function
        request.onload = function() {
            var superHeroes = request.response;
            populateHeader(superHeroes);        
        }
        
        // Create page War Heroes function
        function populateHeader(jsonObj) {
            var myH1 = document.createElement('h1');
            myH1.textContent = jsonObj['homeTown'];
            header.appendChild(myH1);

            var myPara = document.createElement('p');
            myPara.textContent = 'Name: ' + jsonObj['members'][0].name + ' // Age: ' + jsonObj['members'][0].age;
            header.appendChild(myPara);     
        }