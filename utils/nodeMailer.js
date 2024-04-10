const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();
const forgotPasswordResetLink = async (payload) => {
    const { _id } = payload;
    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '15m' });

    //   const resetLink = `${process.env.DEPLOYED_BE_BASE_URL}/api/reset-password/${_id}/${token}`;
    const resetLink = ` ${process.env.Base_URL_BE}reset-password/${_id}/${token}`;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: process.env.ACCOUNT_LOGIN,
            pass: process.env.NODE_MAILER_SECRET,
        },
    });
    const mailOption = {
        from: { name: 'Customer Support', address: process.env.ACCOUNT_LOGIN },
        to: [payload.email], // list of receivers
        subject: 'Forgot Your Password? Reset Here ', // Subject line
        text: `Hello user you had requested for reset password , this link will expire in 10 min `, // plain text body
        html: `<div style="background-color:#f7f7f7; padding:30px 0 font-family:'roboto', 'Open Sans', 'helvetica', 'arial'" bgcolor="#f7f7f7">
    
        <table dir="ltr" style="background-color:#ffffff; border:1px solid #ddd; box-shadow:1px 1px #ddd; border-collapse:collapse;margin:0 auto;min-width:320;max-width:560px;padding:0;z-index:10 " align="center" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff">
          <tbody>
            <tr>
              <td style="padding:8px 32px 0px 32px; font-weight:400">
                <p style="color:#555;font-size:24px;line-height:30px;padding:0px;text-align:left; font-weight:400">
                  <strong>H</strong>ello!
                </p>
                <p style="color:#555;">
                  We received a request to reset the password associated with this e-mail address. If you made this request, please follow the instructions below.
                </p>
                <p style="color:#555;">
                  Click on the link below to reset your password using our secure server:
                </p>
                <p>
                  <a href="${resetLink}" style="color:#a8501e;" target="_blank">Reset My password</a>
                </p>
                <p style="color:#555;">
                  If clicking the link does not seem to work, you can copy and paste the link into your browser address window, or retype it there.
                </p>
                <p style="color:#555; font-weight:500;">
                  Thank You!
                </p>
                
              </td>
            </tr>
                  
            <tr>
              <td style="padding:32px 32px 32px 32px; background-color:#f9f9f9;font-size:small">
                <address style="font-style:normal">
                  Company Name, Company building, street, city 10038
                </address>
                <div style="color:#5e5656;">
                  <a href="mailto:info@company-name.com" style="color:#a8501e" target="_blank">info@company-name.com</a>
                </div>
                <div style="color:#5e5656;">
                  +49-XX-XXXXXXXX
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      `, // html body
    };
    try {
        transporter.sendMail(mailOption);
        console.log('email sent to gmail', mailOption);
    } catch (err) {
        console.log('error in sending email', err);
    }
    return resetLink;
};
module.exports = { forgotPasswordResetLink };
