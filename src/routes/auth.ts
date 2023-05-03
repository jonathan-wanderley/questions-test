import { NextFunction, Request, Response, Router } from "express";
import passport from "passport";

const routes = Router();

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
  //req.session = null;
  req.logout( function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
  res.redirect(process.env.CLIENT_URL as string)
})

export default routes;
