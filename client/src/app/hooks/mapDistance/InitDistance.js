export default (mapObject) => {
    function deleteClickLine() {
        if (mapObject.clickLine) {
            mapObject.clickLine.setMap(null);    
            mapObject.clickLine = null;        
        }
        }

    function deleteDistance () {
        if (mapObject.distanceOverlay) {
            mapObject.distanceOverlay.setMap(null);
            mapObject.distanceOverlay = null;
        }
        } 

    function deleteCircleDot() {
        var i;

        for ( i = 0; i < mapObject.dots.length; i++ ){
            if (mapObject.dots[i].circle) { 
                mapObject.dots[i].circle.setMap(null);
            }

            if (mapObject.dots[i].distance) {
                mapObject.dots[i].distance.setMap(null);
            }
        }

         mapObject.dots = [];
    }

    
    deleteClickLine();
    deleteDistance();
    deleteCircleDot();

    mapObject.drawingFlag = false;

    {mapObject.moveLine ? mapObject.moveLine.setMap(null) : null}
    mapObject.moveLine = null;

}
