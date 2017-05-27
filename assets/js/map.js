function initMap() {
   /* let googleMapsClient = require('@google/maps').createClient({
        key: 'AIzaSyBBzivyiXOgLjv-MaKuJkjNl5kk3dchM4c'
    });*/
    let urulu = {lat: 51.1803293, lng: -1.8263834};
    let map = new google.maps.Map(document.querySelector('.google-map'), {
        center: {lat: 51.1755293, lng: -1.8173858},
        scrollwheel: false,
        zoom: 15
    });
    let marker = new google.maps.Marker({
        position: urulu,
        map: map,
        icon: 'assets/images/loca-loca-loca.svg'
    });
}
