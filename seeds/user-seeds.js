const { User } = require('../models');

const userData = [
  {
    name: "Jane",
    email: "jane@gmail.com",
    password: "password1234"
  },
  {
    name: "Paul",
    email: "paul@gmail.com",
    password: "password1234"
  },
  {
    name: "Michelle",
    email: "michelle@gmail.com",
    password: "password1234"
  },
  {
    name: "Kat",
    email: "kat@gmail.com",
    password: "password1234"
  },
  {
    name: "Angela",
    email: "angela@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;