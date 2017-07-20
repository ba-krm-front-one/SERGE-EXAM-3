(() => {
    function useIsotope(event) {

        // init Isotope
        let isotopeGrid = new Isotope( '.grid', {
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use element for option
                columnWidth: 200
            }
        });
    }})();