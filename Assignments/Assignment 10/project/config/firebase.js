const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../serviceAccountKey.json');

try {
  initializeApp({
    credential: cert(serviceAccount)
  });
  console.log('🔥 Firebase Firestore connected successfully!');
} catch (error) {
  console.error('❌ Firebase connection error:', error.message);
}

const db = getFirestore();

module.exports = db;
