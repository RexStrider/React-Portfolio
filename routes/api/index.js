const express = require("express");
const nodemailer = require("nodemailer");

const keys = require('../../config/keys.js');

const router = express.Router();


router.get('/', (req, res) => {
    res.json({ message: 'hit the api route' });
});

router.post('/test', (req, res) => {
    console.log(req.body);

    res.json({ message: 'successfully hit api test route...' });
})

router.post('/mail', async (req, res) => {
    try{
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        let transporter = await nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 7337,
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
                res.send({ error });
            }
            else {
                console.log(result);
                res.json({message: 'send mail executed successfully', result});
            }
        })
    }
    catch(error) {
        console.log(error);
    }
})

module.exports = router;