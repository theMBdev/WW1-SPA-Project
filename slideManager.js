/*
a ‘slide’manager  module:used to  display ‘slides’ from a collection of ‘slides’ with appropriate controls for first, last, next, previous, goto slide number; where a ‘slide’can  be  a  graphic  image  or  a  pdf  or  just  a  page  of  text  from  a  collection  of images/pdfs/text/eventspages
*/

var slideManager = (function(){

    // slide 
    var slideIndex = 1;
    
    function startSlides(slideIndex) {
        showSlides(slideIndex);
    }
   

    function plusSlides(n) {
        
        showSlides(slideIndex += n);
        myMove(slideIndex);   
    }

        function currentSlide(n) {
            showSlides(slideIndex = n);
            myMove(slideIndex);    
        }

            //    function buildSlideShow(n) {

            //        // slide 
            //        var slideIndex = 1;
            //        showSlides(slideIndex);


            //        function plusSlides(n) {
            //            showSlides(slideIndex += n);
            //            myMove(slideIndex);   
            //        }

            //        function currentSlide(n) {
            //            showSlides(slideIndex = n);
            //            myMove(slideIndex);    
            //        }

            function showSlides(n) {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                var dots = document.getElementsByClassName("dot");

                // go back to slide one
                if (n > slides.length) {slideIndex = 1} 
                // go to last slide
                if (n < 1) {slideIndex = slides.length}

                // hide all slides
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";  
                }

                // 
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace("active", "");
                }

                // show first slide
                slides[slideIndex - 1].style.display = "block"; 
                // darken first dot
                dots[slideIndex - 1].className += " active";
            }   
    //    }


    return {
//        buildSlideShow : buildSlideShow,
        showSlides : showSlides,
        plusSlides : plusSlides,
        showSlides : showSlides        
    }    


})();




