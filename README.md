# oauth-app-with-google-using-nodejs
```
Sign in with Google+
This uses oauth2 services to login the user as 3rd party service.thub
By usign OAuth services we can easily sign up for any form just by clicking on google+ or facebook or github but tton.
When user comes back user can easily sign in using this.
we uses cookiesession so that user don't have to login again and again for a certain period of time say 1day.
```

### app steps
```
First setup express application to use google strategy.
After that use passportjs in application.
Create user schema and model in mongodb.
save user to db.
use cookie session to identify just logged in user so user don't have to login again and again.
logout the user page.
One profile page to render if user is logged in otherwise render login page with google+
```
