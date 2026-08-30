import nodemailer from "nodemailer";


// =====================================================
// CREATE EMAIL TRANSPORTER
// =====================================================

const transporter = nodemailer.createTransport({
    host: process.env.BREVO_SMTP_HOST,
    port: Number(process.env.BREVO_SMTP_PORT),
    secure: false,

    auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASSWORD,
    },
});


// =====================================================
// VERIFY EMAIL CONNECTION
// =====================================================

transporter.verify((error, success) => {

    if (error) {

        console.log(
            "Email transporter error:",
            error.message
        );

    } else {

        console.log(
            "Email server is ready"
        );

    }

});


// =====================================================
// SEND EMAIL
// =====================================================

const sendEmail = async ({
    to,
    subject,
    html,
    text,
}) => {

    try {

        const info = await transporter.sendMail({

            from: `"Being IBAN Digital" <${process.env.MAIL_FROM}>`,

            to,

            subject,

            text,

            html,

        });


        console.log(
            "Email sent:",
            info.messageId
        );


        return {
            success: true,
            messageId: info.messageId,
        };


    } catch (error) {

        console.log(
            "Email sending error:",
            error.message
        );


        return {
            success: false,
            message: error.message,
        };

    }
};


export default sendEmail;