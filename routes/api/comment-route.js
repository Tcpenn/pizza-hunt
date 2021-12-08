const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller')


// /api/comments/<pizzaId> for the addComment()
router.route('/:pizzaId').post(addComment);

// /api/comments/<commentId> for removeComment()
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// remove route
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;

