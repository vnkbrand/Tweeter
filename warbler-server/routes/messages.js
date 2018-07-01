const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  createMessage,
  getMessage,
  deleteMessage
} = require("../handlers/messages");

// prefix - /api/users/:id/messages - METHOD - when there is a POST - there will be create message!
router.route("/").post(createMessage);

// prefix - /api/users/:id/messages/:message_id
router
  .route("/:message_id")
  .get(getMessage)
  .delete(deleteMessage);

module.exports = router;
