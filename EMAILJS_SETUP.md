# EmailJS Setup Instructions

This guide will help you configure EmailJS to enable the contact form to send emails to both rojelio@techwavehome.work and reggie@techwavehome.work.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Important:** Use an email account that you have access to (e.g., your company Gmail)
6. Copy the **Service ID** - you'll need this later

## Step 3: Create Email Template

1. In the EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Set up the template with the following configuration:

### Template Settings:
- **Template Name:** Contact Form Submission (or any name you prefer)
- **Subject:** New Contact Form Submission from {{from_name}}

### Template Content:
```
You have received a new message from the TechWave Home Solutions contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Message:
{{message}}

---
This email was sent from the TechWave Home Solutions website contact form.
```

### Important Template Configuration:
- In the template settings, find the **"To Email"** field
- Enter: `rojelio@techwavehome.work, reggie@techwavehome.work`
- This ensures emails are sent to both addresses

4. Click "Save"
5. Copy the **Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. In the EmailJS dashboard, go to "Account" → "General"
2. Find your **Public Key** (also called API Key)
3. Copy the **Public Key**

## Step 5: Configure Environment Variables

1. In your project root directory, create a `.env` file (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS credentials from the previous steps

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit a test message
4. Check both email addresses (rojelio@techwavehome.work and reggie@techwavehome.work) for the test email

## Important Notes

- **Free Tier Limit:** EmailJS free tier allows 200 emails per month
- **Email Delivery:** Emails are sent from your connected email service to both recipients
- **Security:** Never commit your `.env` file to version control (it's already in `.gitignore`)
- **Production:** When deploying, add the environment variables to your hosting platform (Netlify, Vercel, etc.)

## Troubleshooting

### Emails not being received?
1. Check your EmailJS dashboard for error logs
2. Verify the email addresses in the template are correct
3. Check spam/junk folders
4. Ensure your EmailJS service is active and verified

### "Email service is not configured" error?
1. Verify your `.env` file exists in the project root
2. Check that all three environment variables are set correctly
3. Restart your development server after creating/modifying `.env`

### Rate limit exceeded?
- You've hit the 200 emails/month limit on the free tier
- Consider upgrading to a paid plan or using a different service

## Support

For EmailJS-specific issues, visit [EmailJS Documentation](https://www.emailjs.com/docs/)
