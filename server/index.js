import express from "express";
import dotenv from "dotenv";
dotenv.config();

const server = express();

const port = process.env.PORT || 7000;
server.listen(port, console.log(`Server is running at ${port}`));

import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
