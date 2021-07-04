import {Application} from "express";
import { createLiterMilk, listLiterMilkByMilkman } from "./controllers/literMilk_controller";
import {createMilkman, listMilkman} from "./controllers/milkman_controller";
import { createPayment, listPaymentMilkByMilkman } from "./controllers/payment_controller";

//Rutas de lecheros, listar, crear
export function routesMilkman(app: Application) {
    app.get('/milkmans/:page/:limit', listMilkman);
    app.post('/milkmans', createMilkman);

}

//Rutas de litros de leche por lechero. listar, crear
export function routesliterMilk(app: Application) {
    app.get('/literMilks/:idmilkman', listLiterMilkByMilkman);
    app.post('/literMilks', createLiterMilk);
}

// Rutas de pago por cada lechero
export function routesPayment(app: Application) {
    app.get('/payments/:idmilkman', listPaymentMilkByMilkman);
    app.post('/payments', createPayment);
}