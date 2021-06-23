import {Application} from "express";
import {createMilkman, listMilkman} from "./controllers/milkman_controller";


export function routesMilkman(app: Application) {
    app.get('/milkmans/:page/:limit', listMilkman);
    app.post('/milkmans', createMilkman);

}
