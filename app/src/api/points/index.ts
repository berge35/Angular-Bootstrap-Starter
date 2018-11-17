import  * as PointController  from '../../../controllers/point.controller';

import * as express from 'express';



var pointRouter = express.Router();

//Create a new point
pointRouter.route('/').post(PointController.createPoint);

//get all points
pointRouter.route('/').get(PointController.getAllPoints);

//delete a point by id
pointRouter.route('/:id').delete(PointController.deletePoint);

//custom error for no id
pointRouter.route('/').delete(PointController.deletePoint);

module.exports = pointRouter;
