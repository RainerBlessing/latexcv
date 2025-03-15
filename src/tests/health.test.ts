import request from 'supertest';
import app from '../app';

describe('Health Check API', () => {
  it('should return 200 and health status', async () => {
    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body.message).toBe('Server is healthy');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('uptime');
  });

  it('should return 404 for non-existent route', async () => {
    const response = await request(app).get('/api/non-existent');

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Route not found');
  });
});
