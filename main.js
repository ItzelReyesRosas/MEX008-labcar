let mapDesk = document.getElementById("map-desktop");
let mapMobi = document.getElementById("map-mobile");
let marker = {};
let markerM = {};

navigator.geolocation.getCurrentPosition(success, error);


/*success pasa el objeto position  como argumento*/
function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let accur  = position.coords.accuracy;
    let pos = new google.maps.LatLng(latitude, longitude);
    let objConfig = {
        zoom: 18,
        center: pos
    }

   
    
    let map = new google.maps.Map(mapDesk, objConfig);
        marker = new google.maps.Marker({
            map: map,
            title: 'Youre here',
            animation: google.maps.Animation.BOUNCE,
            position: pos

        });

    
        let mapMob = new google.maps.Map(mapMobi, objConfig);
        markerM = new google.maps.Marker({
            mapMob: mapMob,
            title: 'Youre here',
            animation: google.maps.Animation.BOUNCE,
            position: pos

        });

        

    

} 

function error() {
    alert('Debes habilitar el permiso para compartir tu ubicación'+ error.code)
}
