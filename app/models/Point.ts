//This is a simple GEOPoint class
//lat lattitude
//long longitude
// Point.ts
import * as mongoose from 'mongoose';

const uri: string = 'mongodb://mongo:27017';

mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Succesfully Connected!")
    }
});

export interface IPoint extends mongoose.Document {
    lat: number
    long: number
};

export const PointSchema = new mongoose.Schema({
    lat: {type:Number, required: true},
    long: {type:Number, required: true},
});
  
const Point = mongoose.model('Point', PointSchema);
export default Point;