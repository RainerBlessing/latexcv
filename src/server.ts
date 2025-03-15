// src/server.ts
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
// Import routes if you have them
// import routes from './routes/index.js'; // Note the .js extension even though it's a .ts file

// Express app initialization
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Serve static files from the dist directory
app.use(express.static('dist'));

// Basic routes
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Routes
// app.use('/api', routes);

// At the end of your routes, add this to serve index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

// The 404 handler is no longer needed since we're serving the React app for all routes
// But you could keep it for API routes specifically

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle graceful shutdown
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  server.close(() => process.exit(1));
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  server.close(() => process.exit(1));
});

export default server;
