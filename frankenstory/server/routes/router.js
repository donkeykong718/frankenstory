import express from 'express'
import storyRouter from '../routes/story.js'
// import userRouter from '../routes/users.js'

const router = express.Router();

router.get('/', (request, response) => response.console.log('Hello world'));

router.use('/', storyRouter);
// router.use('/users', userRouter);

export default router;