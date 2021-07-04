import { Request, Response } from "express"; 
import { db } from "../index";
import { Payment } from "../models/payment";

const collection = "payments";
export async function createPayment(req: Request, res: Response) {
    try {
           const newPayment = Payment(req.body);
           await db.collection(collection).add(newPayment);
           return res.status(201).json({ message: 'Nuevo pago agregado' });
    }
    catch (err) {
           return hardleError(res, err);
    }
}
export async function listPaymentMilkByMilkman(req: Request, res: Response) {       
    try {        
        let idmilkman = req.params.idmilkman;
        let snapshot = await db.collection(collection).where('idmilkman','==',idmilkman).get();
        return res.status(200).json(snapshot.docs.map(doc => Payment(doc.data(), doc.id)));        
    } catch (err) {
        return hardleError(res, err);
    }       
};


function hardleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}