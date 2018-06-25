require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0')
const massive = require('massive');
const bodyParser = require('body-parser');
const checkForSession = require('../server/middlewares/checkForSessions');
const registerController = require('./controllers/registerController');
const guestController = require('./controllers/guestController');
const loginController = require('./controllers/loginController');



const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
} = process.env


const app = express();

app.use( express.static( `${__dirname}/../build` ) );

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})

app.use(bodyParser.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 300000,
        httpOnly: true
    }
}))

app.use(checkForSession)

app.use(passport.initialize())
app.use(passport.session())

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid email profile'
},
    function (accessToken, refreashToken, extraParams, profile, done) {
        const db = app.get('db')
        db.find_user([profile.displayName]).then(users => {
            if (!users[0]) {
                db.create_user([profile.displayName, profile.id]).then(res => {
                    return done(null, res[0].auth_id)
                })
            } else {
                return done(null, users[0].auth_id)
            }
        })

    }
))

passport.serializeUser((profile, done) => {
    done(null, profile)
})

passport.deserializeUser((profile, done) => {

    done(null, profile)
})


app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: `${process.env.HOMEPAGE}#/admin`,
    failureRedirect: `${process.env.HOMEPAGE}`
}))

function isAdmin(req, res, next) {
    if (!req.user) {
        return res.status(403).send(false)

    } else {
        const db = req.app.get('db')
        db.checkAdmin([req.user]).then(response => {
            if (response[0].is_admin !== true) {
                return res.status(403).send(false)
            }
        })
    }
    next()
}


app.get('/api/destroy', loginController.destroy)
app.get('/api/getgueslist', isAdmin, guestController.getGuestList)
app.post('/api/register', registerController.addPerson)
app.get('/api/verifyadmin', registerController.checkAdmin)

app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))