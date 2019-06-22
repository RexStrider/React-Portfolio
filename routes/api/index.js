const express = require("express");
const nodemailer = require("nodemailer");

const keys = require('../../config/keys.js');

const router = express.Router();


router.get('/', (req, res) => {
    res.json({ message: 'hit the api route' });
});

router.get('/mail', async (req, res) => {
    try{
        let transporter = await nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 1337,
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
            subject: 'Nodemailer test',
            text: "Lleeerrooooy Jeeeennnkiinns!",
            html: '<h1>Lleeerrooooy Jeeeennnkiinns!</h1>'
            // auth: {
            //     user: keys.portfolioAddress,
            //     refreshToken: keys.googleRefreshToken,
            //     accessToken: keys.googleAccessToken
            //     //expires: 
            // }
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

    // "use strict";
// const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
    // async function main(){

    //     // Generate test SMTP service account from ethereal.email
    //     // Only needed if you don't have a real mail account for testing
    //     let testAccount = await nodemailer.createTestAccount();

    //     // create reusable transporter object using the default SMTP transport
    //     let transporter = nodemailer.createTransport({
    //         host: "smtp.ethereal.email",
    //         port: 587,
    //         secure: false, // true for 465, false for other ports
    //         auth: {
    //             user: testAccount.user, // generated ethereal user
    //             pass: testAccount.pass // generated ethereal password
    //         }
    //     });

    //     // send mail with defined transport object
    //     let info = await transporter.sendMail({
    //         from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //         to: "arwaterman@gmail.com", // list of receivers
    //         subject: "Hello ✔", // Subject line
    //         text: "Hello world?", // plain text body
    //         html: "<b>Hello world?</b>" // html body
    //     });

    //     console.log("Message sent: %s", info.messageId);
    //     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //     // Preview only available when sending through an Ethereal account
    //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    //     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    //     res.send({ message: 'hit the mail api route' });
    // }

    // main().catch(console.error);

})

module.exports = router;