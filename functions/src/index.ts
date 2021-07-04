import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import {routesliterMilk, routesMilkman} from './router';

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true, timestampsSnapshot: true });

const server = express();
server.use(cors({ origin: true }));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

//Rutas
routesMilkman(server);
routesliterMilk(server);
export const api = functions.https.onRequest(server);
export { db };