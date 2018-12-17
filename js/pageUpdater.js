/*
a page updating module that puts the actual content on to the page
*/
var pageUpdater = (function(){

    // change to loadPage ?    
    function getPage(page) {
        var request = new XMLHttpRequest();

        console.log("Page: ",page);
        
        //loadpage to viewer
        request.onreadystatechange = function() {
            if(this.readyState ==4 && this.status == 200) {            
                
                if(request.status == 200) {
                    console.log('Status ',request.status);
                }
                else {
                    console.log('Status Dead',request.status);
                }
                  

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






