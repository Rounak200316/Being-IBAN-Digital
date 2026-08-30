import meetingModel from "../models/meetingModel.js";
import validator from "validator";
import sendEmail from "../utils/email.js";

// =====================================================
// CREATE MEETING REQUEST
// =====================================================

const createMeeting = async (req, res) => {
  try {
    console.log("========== MEETING REQUEST ==========");
    console.log(req.body);

    const { name, email, phone, company, service, date, time, message } =
      req.body;

    if (!name || !email || !phone || !service || !date || !time || !message) {
      return res.json({
        success: false,
        message: "Please fill in all required fields",
      });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    const meeting = new meetingModel({
      name,
      email,
      phone,
      company,
      service,
      date,
      time,
      message,
    });

    const savedMeeting = await meeting.save();
    await sendEmail({
      to: email,
      subject: "Meeting Request Received - Being IBAN Digital",

      text: `
Hello ${name},

Thank you for booking a meeting with Being IBAN Digital.

We have received your meeting request.

Service: ${service}
Date: ${date}
Time: ${time}

Our team will review your request and get back to you shortly.

Regards,
Being IBAN Digital
    `,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #322217;">
            
            <h2 style="color: #754e17;">
                Meeting Request Received
            </h2>

            <p>Hello <strong>${name}</strong>,</p>

            <p>
                Thank you for booking a meeting with
                <strong>Being IBAN Digital</strong>.
            </p>

            <p>
                We have successfully received your meeting request.
            </p>

            <div style="
                background:#f5eee6;
                padding:20px;
                margin:20px 0;
            ">
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
            </div>

            <p>
                Our team will review your request and get back to you shortly.
            </p>

            <p>
                Regards,<br>
                <strong>Being IBAN Digital</strong>
            </p>

        </div>
    `,
    });

    console.log("========== SAVED MEETING ==========");
    console.log(savedMeeting);

    return res.json({
      success: true,
      message: "Meeting request submitted successfully",
      meeting: savedMeeting,
    });
  } catch (error) {
    console.log("CREATE MEETING ERROR:", error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// GET ALL MEETINGS
// =====================================================

const getMeetings = async (req, res) => {
  try {
    const meetings = await meetingModel.find({}).sort({ createdAt: -1 });

    return res.json({
      success: true,
      meetings,
    });
  } catch (error) {
    console.log("Get meetings error:", error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export { createMeeting, getMeetings };
