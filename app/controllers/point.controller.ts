import { Request, Response } from "express";
import Point from '../models/Point';
import * as express from 'express';
import { debug } from "util";
import * as joi from 'joi';


export let getAllPoints = (req: Request, res: Response) => {
    
    let points = Point.find((err: any, points: any) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(points);
        }
    })
    
}

export let createPoint = (req: Request, res: Response) => {
    var point = new Point(req.body);

    console.log(req.body)
    point.save((err: any) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(point)
        }
    })

};

export let deletePoint = (req: Request, res: Response) => {
    let point = Point.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send("Succesfully Deleted Point: " + req.params.id);
        }
    })

}