import { deleteClickLine, deleteDistance, deleteCircleDot } from "./distanceFunctions";

export default (mapObject) => {
    
    deleteClickLine(mapObject);
    deleteDistance(mapObject);
    deleteCircleDot(mapObject);


}
