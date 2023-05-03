import { NextFunction, Request, Response, Router } from "express";

import TaskController from "./controllers/TaskController";
import TaskValidator from "./validators/TaskValidator";
import passport from "passport";
import { checkLogin } from "./middlewares/checkLogin";

const routes = Router();

//tasks
routes.get('/tasks', checkLogin, TaskController.index);
routes.get('/tasks/:id', TaskController.get);
routes.post('/tasks', TaskValidator.create, TaskController.store);
routes.put('/tasks/:id', TaskValidator.update, TaskController.update);
routes.delete('/tasks/:id', TaskController.destroy);

//auth
routes.get('/login/sucess', (req: Request, res: Response) => {
  if(!req.user) {
    res.status(403).json({
      error: true,
      message: "Not authorized"
    })
  }

  res.json({
    error: false,
    message: "Logged sucessfully",
    user: req.user,
  })
})

routes.get('/login/failed', (req: Request, res: Response) => {
  res.status(401).json({
    error: true,
    message: "Login failure"
  })
})

routes.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: process.env.CLIENT_URL,
  failureRedirect: "/login/failed",
}))

routes.get('/google', passport.authenticate("google", { scope: ["profile", "email"] }));

routes.get('/logout', (req: Request, res: Response, next: NextFunction) => {
  req.session = null;
  req.logout( function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
  res.redirect(process.env.CLIENT_URL as string)
})

export default routes;
