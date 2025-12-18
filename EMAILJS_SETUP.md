# EmailJS Setup for TechWave Home Solutions

## Overview

Your contact form uses EmailJS to send emails directly from the browser to `info@techwavehome.work`. This is simple, works perfectly with Cloudflare Pages, and requires no backend server.

## Current Status

Your EmailJS credentials are already configured in `.env`:
- Service ID: `service_4jwf5k9`
- Template ID: `template_16vhvlf`
- Public Key: `zUl0BiKxOPK_u8_Th`

## What You Need to Do

### Update EmailJS Template Recipient

You need to log into EmailJS and update your email template to send to `info@techwavehome.work`:

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click on **Email Templates**
3. Select your template (`template_16vhvlf`)
4. In the template settings, find the **"To Email"** field
5. Change it to: `info@techwavehome.work`
6. Click **Save**

### Template Variables

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{phone}}` - Customer's phone (optional)
- `{{message}}` - Customer's message
- `{{to_email}}` - Recipient email (info@techwavehome.work)

### Example Template Content

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Body:**
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

## How It Works

1. User fills out contact form on your website
2. EmailJS sends the email directly from the browser
3. Email arrives at `info@techwavehome.work`
4. User sees success message

## Local Testing

```bash
npm run dev
```

Visit `http://localhost:5173`, fill out the contact form, and submit. The email will be sent via EmailJS.

## Deployment to Cloudflare Pages

EmailJS works automatically on Cloudflare Pages - no special configuration needed!

1. Build your site: `npm run build`
2. Deploy to Cloudflare Pages (via Git or dashboard)
3. Done! The contact form will work in production.

**Important:** The EmailJS environment variables (`VITE_EMAILJS_*`) are baked into your build, so Cloudflare Pages doesn't need any environment variables set.

## Troubleshooting

### Emails not being received?

1. **Check EmailJS Dashboard:**
   - Go to EmailJS dashboard
   - Check usage/logs for errors
   - Verify your email service is connected

2. **Check spam/junk folder:**
   - Emails might be going to spam
   - Add info@techwavehome.work to your contacts

3. **Verify template recipient:**
   - Make sure template sends to `info@techwavehome.work`
   - Not the old emails (rojelio@ or reggie@)

4. **Check free tier limit:**
   - EmailJS free tier: 200 emails/month
   - If exceeded, upgrade or wait for monthly reset

### "Email service is not configured" error?

1. Check `.env` file has all three variables set
2. Restart your dev server: `npm run dev`

### How to test if EmailJS credentials work?

Run your site locally (`npm run dev`), fill out the form, and check:
1. Browser console for errors
2. Network tab to see the EmailJS API call
3. info@techwavehome.work inbox for the email

## Why EmailJS?

- ✅ Simple - No backend server needed
- ✅ Works with Cloudflare Pages (static hosting)
- ✅ Free tier: 200 emails/month
- ✅ Client-side (works in browser)
- ✅ Reliable delivery
- ✅ Easy to set up

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Dashboard: https://dashboard.emailjs.com/

## Next Steps

1. Update your EmailJS template to send to `info@techwavehome.work`
2. Test locally with `npm run dev`
3. Deploy to Cloudflare Pages
4. Done!
