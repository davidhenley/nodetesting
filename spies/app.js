// Using let so rewire works for testing.
let db = require('./db');

module.exports.handleSignup = (email, password) => {
  db.saveUser({ email, password });
};
