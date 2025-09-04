// Initialize MongoDB database
db = db.getSiblingDB('headache_journal');

// Create collections
db.createCollection('users');
db.createCollection('headaches');

// Create indexes for better performance
db.users.createIndex({ "email": 1 }, { unique: true });
db.headaches.createIndex({ "owner": 1 });
db.headaches.createIndex({ "createdAt": -1 });

print('Database initialized successfully!');
