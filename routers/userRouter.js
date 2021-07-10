const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');

// get users route
router.get('/getusers', (req, res) => {
  User.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err.message));
 
});

// register user
router.post('/register', (req, res) => {
  const newUser = req.body;
 
  const newPerson = new User(newUser);
  newPerson
    .save()
    .then(() => res.send('user register'))
    .catch((err) => res.status(400).json(err.message));
 
});

// delete user
router.delete('/deleteuser/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((data) => res.json('user is deleted'))
    .catch((err) => res.status(400).json(err.message));
  
});

// update user
router.put('/updateuser/:id', (req, res) => {
  const updateData = req.body;
  User.findByIdAndUpdate(req.params.id, updateData)
    .then((data) => res.json('user is updated'))
    .catch((err) => res.status(400).json(err.message));

});

module.exports = router;
