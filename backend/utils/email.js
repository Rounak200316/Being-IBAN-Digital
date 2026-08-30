import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.BREVO_SMTP_HOST,
    port: Number(process.env.BREVO_SMTP_PORT || 587),

    secure: Number(process.env.BREVO_SMTP_PORT || 587) === 465,

    auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASSWORD,
    },
});

const sendEmail = async ({
    to,
    subject,
    html,
    text,
}) => {
    try {
        console.log("Preparing email...");
        console.log("SMTP host:", process.env.BREVO_SMTP_HOST);
        console.log("SMTP port:", process.env.BREVO_SMTP_PORT);
        console.log("SMTP user configured:", !!process.env.BREVO_SMTP_USER);
        console.log("SMTP password configured:", !!process.env.BREVO_SMTP_PASSWORD);
        console.log("MAIL_FROM configured:", !!process.env.MAIL_FROM);

        const info = await transporter.sendMail({
            from: `"Being IBAN Digital" <${process.env.MAIL_FROM}>`,
            to,
            subject,
            text,
            html,
        });

        console.log("EMAIL SENT:", info.messageId);

        return {
            success: true,
            messageId: info.messageId,
        };

    } catch (error) {
        console.error("EMAIL ERROR:", error);

        return {
            success: false,
            message: error.message,
        };
    }
};

export default sendEmail;