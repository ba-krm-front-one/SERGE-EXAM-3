(() => {
    let elem = document.querySelector('.');
    let flkty = new Flickity(elem, {
        // options
        autoPlay: 3500,
        wrapAround: true,
        contain: true,
    });
})();
