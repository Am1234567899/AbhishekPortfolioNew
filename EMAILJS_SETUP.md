# EmailJS Setup Guide

## Complete Setup Instructions for Contact Form

Your contact form is now fully functional! Follow these steps to configure EmailJS:

### 1. Sign up for EmailJS
- Go to https://www.emailjs.com/
- Create a free account (500 emails/month included)

### 2. Create Email Service
- In EmailJS dashboard, go to **Email Services**
- Click **Add New Service**
- Choose your email provider (Gmail recommended)
- Follow the setup instructions to connect your email account

### 3. Create Email Template
- Go to **Email Templates**
- Click **Create New Template**
- Use this template structure:

```
Subject: New Portfolio Contact from {{from_name}}

Hello {{to_name}},

You have received a new message through your portfolio website:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
```

### 4. Update Configuration
- Copy your **Service ID**, **Template ID**, and **Public Key** from EmailJS
- Open `src/config/emailjs.js`
- Replace the placeholder values:

```javascript
export const emailjsConfig = {
  serviceId: 'your_actual_service_id',     // Replace this
  templateId: 'your_actual_template_id',   // Replace this
  publicKey: 'your_actual_public_key',     // Replace this
};
```

### 5. Test Your Contact Form
- Start the application: `npm start`
- Navigate to the Contact section
- Fill out and submit the form
- Check your email for the message

## Features Implemented

✅ **Functional Contact Form**
- Real-time form validation
- Professional error messages
- Success/failure notifications
- EmailJS integration ready

✅ **CV Download**
- Professional PDF resume created
- Download functionality working
- Accessible from Hero section

✅ **Form Validation**
- Name: minimum 2 characters
- Email: valid email format required
- Subject: minimum 5 characters
- Message: minimum 10 characters

✅ **User Experience**
- Beautiful glass morphism design
- Animated form interactions
- Toast notifications for feedback
- Responsive design

## Troubleshooting

**Form not sending emails?**
- Verify EmailJS configuration is correct
- Check browser console for error messages
- Ensure EmailJS public key is properly set

**CV download not working?**
- Make sure `Abhishek_Mishra_Resume.pdf` exists in the `public` folder
- Check browser console for 404 errors

## Next Steps

1. Complete EmailJS setup with your credentials
2. Replace the sample CV with your actual resume
3. Test all functionality
4. Deploy your portfolio!

Your portfolio is now fully functional with working contact form and CV download! 🎉