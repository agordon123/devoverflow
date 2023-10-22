// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("nextjs13");

// Create a new document in the collection.
db.getCollection("users").insertOne({
  clerkId: "123456789",
  name: "John Doe",
  username: "johndoe123",
  email: "john.doe@example.com",
  password: "securePassword123",
  bio: "I'm a passionate software developer.",
  picture: "https://example.com/johndoe.jpg",
  location: "New York, NY",
  portfolioWebsite: "https://johndoe-portfolio.com",
  reputation: 42,
  saved: ["60d2ee649a2e4c15dc3b4a75", "60d2ee649a2e4c15dc3b4a76"],
  joinedAt: new Date("2021-06-23T14:48:00.000Z"),
});
// The prototype form to create a collection:

/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
