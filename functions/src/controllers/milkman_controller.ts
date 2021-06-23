import { Request, Response } from "express";
import { Milkman } from "../models/milkman";
import { db } from "../index";

const collection = "milkmans";
export async function createMilkman(req: Request, res: Response) {
       try {
              const newMilkman = Milkman(req.body);
              await db.collection(collection).add(newMilkman);
              return res.status(201).json({ message: 'Lechero agregado exitosamente' });
       }
       catch (err) {
              return hardleError(res, err);
       }
}
export async function listMilkman(req: Request, res: Response) {
       try {
              let page = parseInt(req.params.page);
              let limit = parseInt(req.params.limit);
              let avoid = page == 1 ? 0 : (page - 1) * limit;
              let snaphot = await db.collection(collection).orderBy('apellido').offset(avoid).limit(limit).get();
              return res.status(200).json(snaphot.docs.map(doc => Milkman(doc.data(), doc.id)));
       }
       catch (err) {
              return hardleError(res, err);
       }
}
function hardleError(res: Response, err: any) {
       return res.status(500).send({ message: `${err.code} - ${err.message}` });
}