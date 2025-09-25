# Email Setup Instructions

The contact form is currently set up to send emails to:
- rojelio@techwavehome.work
- reggie@techwavehome.work

## Implementation Options

### Option 1: EmailJS (Recommended for Client-Side)

1. Sign up at https://www.emailjs.com/
2. Create an email template with these variables:
   - {{from_name}}
   - {{from_email}}
   - {{phone}}
   - {{message}}
   - {{to_emails}}

3. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```

4. Update the Contact.tsx file:
   ```typescript
   import emailjs from '@emailjs/browser'

   // In the handleSubmit function, replace the simulation with:
   const result = await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     emailContent,
     'YOUR_PUBLIC_KEY'
   )
   ```

### Option 2: Netlify Forms (If deploying to Netlify)

1. Add `netlify` attribute to the form element
2. Add hidden input with name="_to" and value="rojelio@techwavehome.work, reggie@techwavehome.work"
3. No JavaScript changes needed - Netlify handles it automatically

### Option 3: Formspree

1. Sign up at https://formspree.io/
2. Create a new form endpoint
3. Update the form to POST to the Formspree endpoint
4. Configure multiple recipients in Formspree dashboard

### Option 4: Backend API

Create your own backend service with:
- Node.js + Express + Nodemailer
- Python + Flask/FastAPI + SMTP
- .NET Core Web API + SMTP

## Current Status

The form currently:
✅ Validates all input fields
✅ Shows loading states
✅ Displays success/error messages
✅ Logs email content to console (for testing)
⏳ Needs actual email service integration

## Test the Form

1. Fill out the contact form
2. Check browser console to see the email content that would be sent
3. Form validates required fields and email format
4. Success message appears after 2-second delay (simulated sending)