require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const seedUsers = async () => {
  try {
    // Connect to DB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing users (optional)
    await User.deleteMany({});

    // Create admin user
    const admin = new User({
      username: 'admin',
      password: await bcrypt.hash('admin123', 10),
      role: 'admin'
    });
    await admin.save();

    // Create regular user
    const user = new User({
      username: 'user',
      password: await bcrypt.hash('user123', 10),
      role: 'user'
    });
    await user.save();

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedUsers();