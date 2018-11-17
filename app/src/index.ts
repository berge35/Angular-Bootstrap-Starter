var pointRoutes = require('./api/points/index');

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.

import * as express from 'express';
import * as cors from 'cors';


const port = 3000

const pointApp = express();

var bodyParser = require('body-parser'); 
pointApp.use(bodyParser.json()); 
pointApp.use(bodyParser.urlencoded({ extended: true }));

pointApp.disable("x-powered-by");
// Automatically allow cross-origin requests
pointApp.use(cors({ origin: true }));

pointApp.use('/points', pointRoutes);

pointApp.listen(port, () => console.log(`App running on ${port}!`))



