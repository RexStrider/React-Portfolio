const express = require("express");
const nodemailer = require("nodemailer");

const keys = require('../../config/keys.js');
const port = process.env.PORT || 5050;

const router = express.Router();




router.get('/', (req, res) => {
    res.json({ message: 'You hit the api test route.' });
});

router.post('/mail', async (req, res) => {
    try{
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        let transporter = await nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port,
            auth: {
                user: keys.portfolioAddress,
                pass: keys.portfolioPassword
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: `Portfolio Contact Form <${keys.portfolioAddress}>`,
            to : keys.portfolioAddress,
            subject: 'Portfolio Contact Form',
            html:  `<h1>New Contact Information</h1>` +
                    `<h2>${name}</h2>` +
                    `<p>${email}</p>` +
                    `<h2>Message</h2>` +
                    `<p>${message}</p>`
        }

        console.log(mailOptions);
        
        await transporter.sendMail(mailOptions, (error, result) => {
            if(error) {
                console.log(error);
                res.json({ message: "We are experiencing technical difficulties and were unable to send your message." });
            }
            else {
                console.log(result);
                res.json({ message: 'Your message has been sent.' });
            }
        })
    }
    catch(error) {
        console.log(error);
    }
})

module.exports = router;