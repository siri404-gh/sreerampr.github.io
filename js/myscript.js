window.onload = function () {
    var links = document.getElementsByClassName('link');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            var id = this.innerHTML.toLowerCase().replace(' ', '');
            var top = $("#" + id).offset().top - 10;
            $('html, body').animate({
                scrollTop: top
            }, 500);
        });
    }
};
