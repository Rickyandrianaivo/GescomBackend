import { Schema, model } from "mongoose";
export const PointDeVenteSchema = new Schema({
    codeSociete: { type: String, required: true },
    codeFournisseur: { type: String, required: true },
    nomPV: { type: String, required: true },
    emplacement: { type: String, required: true },
    ordinateur: { type: String },
    telephone1: { type: String },
    telephone2: { type: String },
    telephone3: { type: String },
    dateDeVente: { type: Date, required: true },
    prefixeVente: { type: String, required: true },
    numeroVente: { type: Number, required: true, default: 0 },
    dateAchat: { type: Date, required: true },
    prefixeAchat: { type: String, required: true },
    numeroAchat: { type: Number, required: true, default: 0 },
    dateInventaire: { type: Date, required: true },
    prefixeInventaire: { type: String, required: true },
    numeroInventaire: { type: Number, required: true, default: 0 },
    dateBE: { type: Date, required: true },
    prefixeBE: { type: String, required: true },
    numeroBE: { type: Number, required: true, default: 0 },
    dateBS: { type: Date, required: true },
    prefixeBS: { type: String, required: true },
    numeroBS: { type: Number, required: true, default: 0 },
    dateCloture: { type: Date, required: true },
    prefixeCloture: { type: String, required: true },
    numeroCloture: { type: Number, required: true, default: 0 },
    numeroMouvementStock: { type: Number, required: true, default: 0 }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const PointDeVenteModel = model('PointDeVente', PointDeVenteSchema);
//# sourceMappingURL=pointDeVente.model.js.map