// EmailJS Configuration
// To set up EmailJS for your portfolio:
// 1. Sign up at https://www.emailjs.com/
// 2. Create a new email service (Gmail, Outlook, etc.)
// 3. Create an email template with the following variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{subject}} - email subject
//    - {{message}} - email message content
//    - {{to_name}} - recipient name (Abhishek Mishra)
// 4. Get your Public Key from EmailJS dashboard
// 5. Replace the placeholder values below with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: 'service_portfolio', // Replace with your EmailJS service ID
  templateId: 'template_contact', // Replace with your EmailJS template ID
  publicKey: 'your_public_key_here', // Replace with your EmailJS public key
};

// Example template structure for EmailJS:
/*
Subject: New Portfolio Contact from {{from_name}}

Hello {{to_name}},

You have received a new message through your portfolio website:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
*/