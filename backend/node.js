const bcrypt = require('bcrypt');

// Step 1: Get the current date and convert it to string
const name = "gtking";  // ISO format: "YYYY-MM-DDTHH:mm:ss.sssZ"

// Step 2: Set a salt rounds for bcrypt (higher number means more security but slower)
const saltRounds = 10;

// Step 3: Encrypt (hash) the date
bcrypt.hash(name, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing the date:', err);
  } else {
    console.log('Original name:', name);
    console.log('Hashed name:', hash);
  }
});
