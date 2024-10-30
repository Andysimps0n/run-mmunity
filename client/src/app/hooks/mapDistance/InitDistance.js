import { deleteClickLine, deleteDistance, deleteCircleDot } from "./distanceFunctions";

export default (mapObject) => {
    
    deleteClickLine(mapObject);
    deleteDistance(mapObject);
    deleteCircleDot(mapObject);

    mapObject.drawingFlag = false;

    // {mapObject.moveLine ? mapObject.moveLine.setMap(null) : null}
    // mapObject.moveLine = null;

}
