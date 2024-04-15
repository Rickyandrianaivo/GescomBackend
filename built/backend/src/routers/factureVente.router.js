"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var article_models_1 = require("../models/article.models");
var factureVente_model_1 = require("../models/factureVente.model");
var router = (0, express_1.Router)();
// router.get("/seed",asyncHandler(
//     async(req, res) =>{
//     const articleCount = await ArticleModel.countDocuments();
//     if(articleCount > 0){
//         res.send("Article seed is already done");
//         return;
//     }
//     await ArticleModel.create(sample_articles);
//     res.send("seed is done!");
// }))
router.get("/", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _b = (_a = res).send;
                return [4 /*yield*/, factureVente_model_1.FactureVenteModel.find()];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/:dateDu/:dateAu", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dateDu, dateAu, factureVentes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dateDu = req.params['dateDu'];
                dateAu = req.params['dateAu'];
                if (!(dateDu && dateAu)) return [3 /*break*/, 2];
                return [4 /*yield*/, factureVente_model_1.FactureVenteModel.find({ date: { $gte: new Date(dateDu), $lte: new Date(dateAu) } })];
            case 1:
                factureVentes = _a.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, factureVente_model_1.FactureVenteModel.find()];
            case 3:
                factureVentes = _a.sent();
                _a.label = 4;
            case 4:
                res.send(factureVentes);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/search/:searchTerm", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchRegex, factureVentes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchRegex = new RegExp(req.params['searchTerm'], 'i');
                return [4 /*yield*/, factureVente_model_1.FactureVenteModel.find({ designation: { $regex: searchRegex } })];
            case 1:
                factureVentes = _a.sent();
                res.send(factureVentes);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/:numeroDoc", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var numeroDoc, factureVente;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                numeroDoc = req.params['numeroDoc'];
                return [4 /*yield*/, factureVente_model_1.FactureVenteModel.findOne({ numeroDocument: numeroDoc })];
            case 1:
                factureVente = _a.sent();
                res.send(factureVente);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/reference/:reference", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var reference, article;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                reference = req.params['reference'];
                return [4 /*yield*/, article_models_1.ArticleModel.findOne({ reference: reference })];
            case 1:
                article = _a.sent();
                res.send(article);
                return [2 /*return*/];
        }
    });
}); }));
router.post("/create", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, numeroDocument, date, numeroClient, totalHT, totalTVA, totalTTC, montantAcompte, netAPayer, paye, annule, depot, soldeDu, newFactureVente;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, numeroDocument = _a.numeroDocument, date = _a.date, numeroClient = _a.numeroClient, totalHT = _a.totalHT, totalTVA = _a.totalTVA, totalTTC = _a.totalTTC, montantAcompte = _a.montantAcompte, netAPayer = _a.netAPayer, paye = _a.paye, annule = _a.annule, depot = _a.depot, soldeDu = _a.soldeDu;
                newFactureVente = {
                    numeroDocument: numeroDocument,
                    date: date,
                    numeroClient: numeroClient,
                    totalHT: totalHT,
                    totalTVA: totalTVA,
                    totalTTC: totalTTC,
                    montantAcompte: montantAcompte,
                    netAPayer: netAPayer,
                    paye: paye,
                    annule: annule,
                    depot: depot,
                    soldeDu: soldeDu
                };
                return [4 /*yield*/, factureVente_model_1.FactureVenteModel.create(newFactureVente)];
            case 1:
                _b.sent();
                res.send(newFactureVente);
                return [2 /*return*/];
        }
    });
}); }));
exports.default = router;