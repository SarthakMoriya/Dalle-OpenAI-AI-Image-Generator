import express, { response } from "express";
import { Configuration, OpenAIApi } from 'openai'
import Posts from '../models/post.js'

const dalleRouter = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

dalleRouter.route('/').get((req, res) => {
    res.send('HELLO FROM DALLE')
})

dalleRouter.route('/')
    .post(async (req, res) => {
        try {
            const { prompt } = req.body;

            const aiResponse = await openai.createImage({
                prompt,
                n: 1,
                size: '1024x1024',
                response_format: 'b64_json'
            })

            const image = aiResponse.data.data[0].b64_json;
            res.status(200).json({ photo: image })
        } catch (err) { console.log(err) }
    })

export default dalleRouter;