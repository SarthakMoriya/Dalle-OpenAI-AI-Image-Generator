import express from "express";
import { v2 as cloudinary } from "cloudinary"
import Posts from '../models/post.js'

const postRouter = express.Router();


export default postRouter;