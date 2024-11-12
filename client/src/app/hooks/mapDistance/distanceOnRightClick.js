import { deleteCircleDot,deleteClickLine, deleteDistance, showDistance, getTimeHTML } from "./distanceFunctions";
import { updateMap } from "@/app/store";


//  Quit Drawing when right clicked
export default function distanceOnRightLick( mapObject, dispatch) {
   
  if (mapObject.drawingFlag) {
          
    mapObject.moveLine.setMap(null);

    dispatch(updateMap({field : "moveLine", value : null}))
    dispatch(updateMap({field : "drawingFlag", value : false}))

    
    var path = mapObject.clickLine.getPath();

    if (path.length > 1) {

        if (mapObject.dots[mapObject.dots.length-1].distance) {
            mapObject.dots[mapObject.dots.length-1].distance.setMap(null);
            mapObject.dots[mapObject.dots.length-1].distance = null;    
            dispatch(updateMap({field : "dots[mapObject.dots.length-1].distance", value : null}))

        }

        let distance = Math.round(mapObject.clickLine.getLength())
        let content = getTimeHTML(distance);
        showDistance(content, path[path.length-1], mapObject);  
        
    } else {
    
      deleteClickLine(mapObject)
      deleteDistance(mapObject);
      deleteCircleDot(mapObject);
    }
    
  }

}

  