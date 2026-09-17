const express = require('express');
const router = express.Router();
const db = require('../config/firebase');
const userSchema = require('../schema/userSchema');

router.post('/users', async (req, res) => {
  try {
    const { error, value } = userSchema.validate(req.body, { abortEarly: false });
    
    if (error) {
      const errorMessages = error.details.map(detail => detail.message);
      return res.status(400).json({
        success: false,
        errors: errorMessages
      });
    }

    const docRef = await db.collection('users').add({
      name: value.name,
      email: value.email,
      age: value.age,
      course: value.course,
      createdAt: new Date().toISOString()
    });

    return res.status(201).json({
      success: true,
      message: 'User data stored successfully!',
      userId: docRef.id
    });

  } catch (err) {
    console.error('Error saving to Firestore:', err);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while saving data.'
    });
  }
});

module.exports = router;
