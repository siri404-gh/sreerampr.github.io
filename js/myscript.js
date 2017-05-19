window.onload = function() {
    var links = document.getElementsByClassName('link');

    for (var i = 0; i< links.length; i++) {
        links[i].addEventListener('click', function() {
            var id = this.innerHTML.toLowerCase();
            var top = $("#"+id).offset().top;
            $('html, body').animate({
                scrollTop: top
            }, 500);
        });
    }
};
