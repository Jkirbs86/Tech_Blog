const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "I wonder what these cookies do?",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "TEXT is another useful data type for entering long form text data.",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "You can never go wrong with cookies",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "I want cookies.",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Did you know about salting?",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "Yeah! Adding that random data is a great way to force a unique hashed output, even when your users all pick 'password' for their password >.< ",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;