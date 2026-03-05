import { createTransport } from "nodemailer";

console.log("Email Config - GMAIL:", process.env.GMAIL);
console.log("Email Config - PASSWORD exists:", !!process.env.PASSWORD);

// 🔴 Initialize transport lazily to ensure env vars are loaded
let transport = null;

const getTransport = () => {
  if (!transport) {
    console.log("🔧 Initializing email transport...");
    transport = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD,
      },
    });
  }
  return transport;
};

export const sendEmail = async ({ to, subject, html }) => {
  try {
    console.log("📧 Attempting to send email to:", to);
    console.log("Subject:", subject);
    
    const mailer = getTransport();
    
    const result = await mailer.sendMail({
      from: `"Ishwar Rugs" <${process.env.GMAIL}>`,
      to,
      subject,
      html,
    });
    
    console.log("✅ Email sent successfully:", result.messageId);
    return result;
  } catch (error) {
    console.error("❌ Email sending error:", error.message);
    console.error("Full error:", error);
    throw error;
  }
};




export const orderConfirmationTemplate = (order) => {
  return `
  <div style="font-family: Arial, Helvetica, sans-serif; background:#f5f6fa; padding:40px 0;">
  
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 15px rgba(0,0,0,0.1);">

      <div style="background:#111827; padding:20px; text-align:center;">
        <h1 style="color:white; margin:0;">Ishwar Rugs</h1>
        <p style="color:#9ca3af; margin:5px 0 0;">Fine Handcrafted Rugs</p>
      </div>

      <div style="padding:30px;">
        <h2 style="color:#111827;">Order Confirmed 🎉</h2>

        <p style="color:#4b5563; font-size:15px;">
        Thank you for your purchase. Your order has been successfully confirmed.
        </p>

        <div style="background:#f9fafb; padding:20px; border-radius:8px; margin:20px 0;">
          <p style="margin:5px 0;"><strong>Order ID:</strong> ${order._id}</p>
          <p style="margin:5px 0;"><strong>Total Amount:</strong> ₹${order.totalAmount}</p>
          <p style="margin:5px 0;"><strong>Status:</strong> ${order.orderStatus}</p>
        </div>

        <p style="color:#6b7280;">
        We will notify you once your order is shipped.
        </p>

        <div style="text-align:center; margin-top:25px;">
          <a href="#" style="background:#111827; color:white; padding:12px 25px; text-decoration:none; border-radius:5px;">
          View Order
          </a>
        </div>
      </div>

      <div style="background:#f3f4f6; padding:15px; text-align:center; font-size:13px; color:#6b7280;">
        © ${new Date().getFullYear()} Ishwar Rugs. All rights reserved.
      </div>

    </div>
  </div>
  `;
};


export const orderStatusTemplate = (order) => {
  return `
  <div style="font-family: Arial, Helvetica, sans-serif; background:#f5f6fa; padding:40px 0;">
  
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 15px rgba(0,0,0,0.1);">

      <div style="background:#111827; padding:20px; text-align:center;">
        <h1 style="color:white; margin:0;">Ishwar Rugs</h1>
        <p style="color:#9ca3af; margin:5px 0 0;">Fine Handcrafted Rugs</p>
      </div>

      <div style="padding:30px;">
        <h2 style="color:#111827;">Order Status Updated</h2>

        <p style="color:#4b5563;">
        Your order status has been updated.
        </p>

        <div style="background:#f9fafb; padding:20px; border-radius:8px; margin:20px 0;">
          <p style="margin:5px 0;"><strong>Order ID:</strong> ${order._id}</p>
          <p style="margin:5px 0;"><strong>Status:</strong> 
          <span style="color:#dc2626; font-weight:bold;">${order.orderStatus}</span></p>
          <p style="margin:5px 0;"><strong>Total Amount:</strong> ₹${order.totalAmount}</p>
        </div>

        <p style="color:#6b7280;">
        Thank you for shopping with Ishwar Rugs.
        </p>
      </div>

      <div style="background:#f3f4f6; padding:15px; text-align:center; font-size:13px; color:#6b7280;">
        © ${new Date().getFullYear()} Ishwar Rugs. All rights reserved.
      </div>

    </div>
  </div>
  `;
};