import { deleteClickLine, deleteDistance, deleteCircleDot } from "./distanceFunctions";

export function deleteLines(mapObject) {
    
    deleteClickLine(mapObject);
    deleteDistance(mapObject);
    deleteCircleDot(mapObject);   
    
    console.log('deleteLines runned');

}
