import { NODE_ENV } from '@/config';
import rateLimit from 'express-rate-limit';

// Test all this

export const limiterAuth = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: NODE_ENV === 'production' ? 30 : 99999, // limit each IP to 100 requests per windowMs
});

export const limiterUsers = rateLimit({
  windowMs: NODE_ENV === 'production' ? 15 * 60 * 1000 : 1000, // 15 minutes
  max: NODE_ENV === 'production' ? 50 : 99999, // limit each IP to 10 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
