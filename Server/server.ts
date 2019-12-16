import * as express from 'express';
// const express = require("express");
import * as bodyParser from "body-parser";
import * as cors from "cors";
//import routes
import {ApiRouter} from './api-routes';
import * as mongoose from 'mongoose';

const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/membres', {useNewUrlParser:true});

const db = mongoose.connection;
// Added check for DB connection
if(!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");


//Setup server port
const port = process.env.Port || 5000;

//Use Api route in the App
app.use('/api', ApiRouter);

//Send message for default URL
app.get ("/", (req: any, res: any) => {
    res.send('Hello World with Express');
});

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Server is running on port " + port);
});