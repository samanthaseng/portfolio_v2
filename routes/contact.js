const express = require('express');
const router = express.Router();
const messageModel = require('../models/messages');
const { validateEmail } = require('../helpers/validators/isEmail');
const { isRequired } = require('../helpers/validators/isRequired');

/* GET home page. */
router.post('/', async function(req, res, next) {
    let success = false;
    let message;

    if (isRequired(req.body.name) || validateEmail(req.body.email) || isRequired(req.body.message)) {
        message = isRequired(req.body.name) 
                    ? isRequired(req.body.name) 
                    : validateEmail(req.body.email) 
                        ? validateEmail(req.body.email) 
                        : isRequired(req.body.message);
    } else if (validateEmail(req.body.email)) {
        message = validateEmail(req.body.email);

    } else {
        const newMessage = new messageModel({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message

        });
        const savedMessage = await newMessage.save();
        if (savedMessage) {
            success = true;
            message = 'Votre message a bien été envoyé.';
        } else {
            message = 'Erreur lors de l\'envoi du message.';
        }
    }
  
    res.json({success, message});
});

module.exports = router;
