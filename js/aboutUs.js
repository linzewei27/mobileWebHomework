/**
 * Created by 89418 on 2017/5/4.
 */
window.onload =function () {
    init();

        var x=116.355084,y=39.986753;
        function getPosition(position){
            x=position.coords.latitude;
            y=position.coords.longitude;
        }
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition);
            var map = new BMap.Map("position");
            var point = new BMap.Point(x,y);
            map.centerAndZoom(point,12);
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus() == BMAP_STATUS_SUCCESS){
                    var mk = new BMap.Marker(r.point);
                    map.addOverlay(mk);
                    map.panTo(r.point);
                }
            },{enableHighAccuracy: true})
            return;

    };

}