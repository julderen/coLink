const {Router} = require(`express`);
const multer = require(`multer`);
const usersServices = require(`./services/user-services`);
const asyncMiddleware = require(`../middleware/async-middleware`);

const upload = multer({storage: multer.memoryStorage()});
const userRouter = new Router();

userRouter.get(`/`, async ({query: {limit, skip}}, res) => res.json(await usersServices.getPosts(
    limit && parseInt(limit, 10),
    skip && parseInt(skip, 10)
)));

// userRouter.get(`/:date/image`, async (req, res) => {
//   try {
//     const {info, stream} = await usersServices.getImageByDate(parseInt(req.params.date, 10));
//     console.log(info);
//     res.set(`content-type`, info.contentType);
//     res.set(`content-length`, info.length);
//     res.status(200);
//     stream.pipe(res);
//   } catch (err) {
//     res.status(err.code).send(err);
//   }
// });

userRouter.post(`/`, upload.single(`filename`), asyncMiddleware(async (req, res) => {
  const data = await usersServices.createPost(req.body, req.file);
  return res.json(data);
}));

module.exports = userRouter;
