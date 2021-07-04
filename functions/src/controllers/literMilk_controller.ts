import { Request, Response } from "express";
import { LiterMilk } from "../models/literMilk";
import { db } from "../index";

const collection = "literMilks";


export async function createLiterMilk(req: Request, res: Response) {
    try {
           const newliterMilk = LiterMilk(req.body);
           await db.collection(collection).add(newliterMilk);
           return res.status(201).json({ message: 'Los litros de leche fueron agregados correctamente' });
    }
    catch (err) {
           return hardleError(res, err);
    }
}
export async function listLiterMilkByMilkman(req: Request, res: Response) {       
    try {        
        let idmilkman = req.params.idmilkman;
        let snapshot = await db.collection(collection).where('idmilkman','==',idmilkman).get();
        return res.status(200).json(snapshot.docs.map(doc => LiterMilk(doc.data(), doc.id)));        
    } catch (err) {
        return hardleError(res, err);
    }       
};




function hardleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}