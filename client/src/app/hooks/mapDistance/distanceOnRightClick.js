
//  Quit Drawing when right clicked
export default function distanceOnRightLick(mouseEvent, mapObject) {
 
  if (drawingFlag) {
          
    moveLine.setMap(null);
    moveLine = null;  
    
    var path = mapObject.clickLine.getPath();

    if (path.length > 1) {

        if (dots[dots.length-1].distance) {
            dots[dots.length-1].distance.setMap(null);
            dots[dots.length-1].distance = null;    
        }

        let distance = Math.round(mapObject.clickLine.getLength())

        let content = getTimeHTML(distance);

        showDistance(content, path[path.length-1]);  
        
    } else {

        deleteClickLine();
        deleteCircleDot(); 
        deleteDistnce();

    }
    
    drawingFlag = false;  
  }}

  