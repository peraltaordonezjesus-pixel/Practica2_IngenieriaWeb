/*
   rutas a acciones correspondientes a los 
   métodos HTTP POST y GET según correspondan 
   para las peticiones al servidor.

   En estas rutas se invocan a los controladores
   que son los encargados de procesar las 
  import express from "express";
import { 
  recuperarPassword, 
  registrarUsuario, 
  login 
} from "../controllers/formControllers.js";

const router = express.Router();

router.post("/registro", registrarUsuario);
router.post("/login", login);
router.post("/recuperar", recuperarPassword);

export default router; peticiones.
*/import express from "express";
import { 
  recuperarPassword, 
  registrarUsuario, 
  login 
} from "../controllers/formControllers.js";

const router = express.Router();

router.post("/registro", registrarUsuario);
router.post("/login", login);
router.post("/recuperar", recuperarPassword);

export default router;

import { obtenerPregunta } from "../controllers/formControllers.js";

router.post("/pregunta", obtenerPregunta);