(() => {
    let elem = document.querySelector('.slider');
    let flkty = new Flickity(elem, {
        // options
        autoPlay: 3500,
        wrapAround: true,
        contain: true,
    });
})();
(() => {
    let elem = document.querySelector('.our-team');
    let secondFlickity = new Flickity(elem, {
        // options
        autoPlay: 2000,
        wrapAround: true,
        contain: true,
        pageDots: false,
        arrows: true,
        /*arrowShape: {
            x0: 10,
            x1: 46, y1: 36,
            x2: 51, y2: 36,
            x3: 15
        }*/

    })
})();