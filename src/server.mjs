import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import articleRouter from './routers/article.router.ts';
import userRouter from './routers/user.router.ts';
import pointDeVenteRouter from './routers/pointDeVente.router.ts';
import mouvementStockRouter from './routers/mouvementStock.router.ts';
import bonSortiesRouter from './routers/bonSorties.router.ts';
import inventaireRouter from './routers/inventaire.router.ts';
import factureVenteRouter from './routers/factureVente.router.ts';
import factureVenteDetailRouter from './routers/factureVenteDetail.router.ts';
import bonEntreesDetailsRouter from './routers/bonEntreesDetails.router.ts';
import bonSortiesDetailsRouter from './routers/bonSortiesDetails.router.ts';
import inventaireDetailsRouter from './routers/inventaireDetails.router.ts';
import clientRouter from './routers/client.router.ts';
import bonEntreesRouter from './routers/bonEntrees.router.ts';
import { dbConnect } from './configs/database.config.ts';
dbConnect();


const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended : true}));

app.use(cors({
    // credentials:true,
    // origin:["http://localhost:4200"]
}));

app.use("/api/users", userRouter);
app.use("/api/articles", articleRouter);
app.use("/api/bon-entrees", bonEntreesRouter);
app.use("/api/bon-sorties", bonSortiesRouter);
app.use("/api/clients", clientRouter);
app.use("/api/inventaires", inventaireRouter);
app.use("/api/pointDeVente", pointDeVenteRouter);
app.use("/api/facture-ventes", factureVenteRouter);
app.use("/api/mouvementStock", mouvementStockRouter);
app.use("/api/inventaireDetails", inventaireDetailsRouter);
app.use("/api/bon-entrees-details", bonEntreesDetailsRouter);
app.use("/api/bon-sorties-details", bonSortiesDetailsRouter);
app.use("/api/facture-vente-details", factureVenteDetailRouter);

const port = 443;
app.listen(port, () =>{
    // console.log("Website served on http://ids-gescom.onrender.com:" + port);
    console.log("Website served on http://localhost:" + port);
})