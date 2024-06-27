import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Get MongoDB connection URL from environment variables
const mongoURL = process.env.MONGO_URL;

// Create a function to connect to the database
export async function dbConnect() {
    try {
        // Connect to MongoDB using the provided URL
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true, // Use new URL parser
            useUnifiedTopology: true, // Use new Server Discovery and Monitoring engine
            // Other options can be added here if needed
        });
        console.log('Database connected');
    } catch (error) {
        console.error('Error connecting to database:', error.message);
    }
}

// Export the mongoose instance for use in other parts of the application if needed
export { mongoose };
