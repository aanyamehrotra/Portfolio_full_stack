import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import ContactMessage from '../models/ContactMessage.js';

const router = Router();

const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('email').trim().isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 2000 }),
];

router.post('/', validateContact, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() });
  }

  try {
    const { name, email, message } = req.body;
    const doc = await ContactMessage.create({ name, email, message });
    return res.status(201).json({
      success: true,
      message: "Message received! I'll be in touch soon.",
      id: doc._id,
    });
  } catch (err) {
    console.error('Contact route error:', err);
    return res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

export default router;
