const {Router} = require(`express`);
const postsControllers = require(`../../controllers/posts-controllers`);

const router = new Router();

router.use(`/user`, postsControllers);

module.exports = router;
