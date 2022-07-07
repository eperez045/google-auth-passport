import { Router } from "express";
//creamos la const y ejecutamos la fc
const loginRouter = Router();
//creamos un callback que hace la solicitud
//luego de que autenticamos y nos devuelve la info
loginRouter.get("/google", (req, res) => res.send(req.user));
export { loginRouter };