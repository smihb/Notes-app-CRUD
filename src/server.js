const express = require('express');
const exhbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');

//initializations
const app = express();

//setting > es lo que quiero que haga express con otros modulos
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, '/views'));
app.engine('.hbs', exhbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//  middlewares con funsiones que se ejecutan primero a medida que llegan las peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))

//global variables hace referencia a las variables globales que podemos usar en todo el proyecto

//route
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

// static files archivos libres para los que no se necesita autorizacion para accederlos
app.use(express.static(path.join(__dirname, '/public')));



module.exports = app;