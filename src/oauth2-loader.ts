import passport from "passport"
import passportGoogleOAuth2 from "passport-google-oauth20";

const GoogleStrategy = passportGoogleOAuth2.Strategy;

passport.use(
  new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    function(accessToken, refreshToken, profile, callback) {
      callback(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user as any);
});

console.log("Finished Google Auth Service");

