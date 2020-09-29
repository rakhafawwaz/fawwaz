var formslider = 1;
        imageshow(formslider);

        function current(n) {
            imageshow(formslider = n);
        }

        function plusSlides(n) {
            imageshow(formslider += n);
        }

        function imageshow(n) {
            var i;
            var page = document.getElementsByClassName("slide");
            var slides = document.getElementsByClassName("slide");
            
            if (n > slides.length) 
            { 
                formslider = 1 
            }
            
            if (n < 1) 
            { 
                formslider = slides.length 
            }
            
            for (i = 0; i < slides.length; i++) 
            {
                slides[i].style.display = "none";
            }

            for (i = 0; i < page.length; i++) 
            {
                page[i].className = page[i].className.replace("active");
            }

            slides[formslider - 1].style.display = "block";
            page[formslider - 1].className += " active";
        }