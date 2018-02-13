function Slider(element) {
    this.el = document.querySelector(element);
    this.init();
}

Slider.prototype = {
    init: function() {
        this.links = this.el.querySelectorAll('.js-slider__nav-item a');
        this.wrapper = this.el.querySelector('.js-slider__container');
        this.navigate(); 
    },
    navigate: function() {

        var self = this;

        for (var i = 0; i < this.links.length; i++) {
            var link = this.links[i];
            link.addEventListener("click", function(e) {
                e.preventDefault();
                self.slide(this);
            });
        }



    },
    slide: function(element) {
        this.setCurrentLink(element);

        var index = parseInt(element.getAttribute("data-slide"), 10) + 1;
        var currentSlide = this.el.querySelector(".js-slide:nth-child(" + index + ")");

        this.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";

        if (index < this.links.length)
            this.nextBtn.style.display = 'block';
        else if (index == this.links.length)
            this.nextBtn.style.display = 'none';

        if (index > 1)
            this.prevBtn.style.display = 'block';
        else if (index == 1)
            this.prevBtn.style.display = 'none';



    },
    setCurrentLink: function(link) {
        var parent = link.parentNode;
        var a = parent.querySelector('li');

        link.className = "active";                
        this.currentElement = link;

        for (var j = 0; j < a.length; j++) {
            var cur = a[j];
            if (cur !== link) {
                cur.className = "";
            }
        }
    }
}