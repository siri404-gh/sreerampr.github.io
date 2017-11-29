window.onload = function () {
    var links = document.getElementsByClassName('link');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            var id = this.innerHTML.toLowerCase().replace(' ', '');
            const val = offset(document.getElementById(id));
            console.log(val);
            window.scroll({
                top: val.top,
                left: 0,
                behavior: 'smooth'
            });
        });
    }
};

function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}