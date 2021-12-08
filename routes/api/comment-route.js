const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller')


// /api/comments/<pizzaId> for the addComment()
router.route('/:pizzaId').post(addComment);

// /api/comments/<commentId> for removeComment()
router.route('/:pizzaId/:commentId').delete(removeComment);
module.exports = router;