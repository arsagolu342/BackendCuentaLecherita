import {Application} from "express";
import { createLiterMilk, listLiterMilkByMilkman } from "./controllers/literMilk_controller";
import {createMilkman, listMilkman} from "./controllers/milkman_controller";


export function routesMilkman(app: Application) {
    app.get('/milkmans/:page/:limit', listMilkman);
    app.post('/milkmans', createMilkman);

}
export function routesliterMilk(app: Application) {
    app.get('/literMilk/:idmilkman', listLiterMilkByMilkman);
    app.post('/literMilk', createLiterMilk);

}