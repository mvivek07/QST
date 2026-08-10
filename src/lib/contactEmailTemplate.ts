import type { ContactFormData } from '@/lib/contact'

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

function fieldRow(label: string, value: string, isLink = false): string {
    const safeValue = escapeHtml(value)
    const displayValue = isLink
        ? `<a href="mailto:${safeValue}" style="color:#2563eb;text-decoration:none;font-weight:600;">${safeValue}</a>`
        : `<span style="color:#1b2a6d;font-weight:600;">${safeValue}</span>`

    return `
        <tr>
            <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;width:120px;vertical-align:top;">
                <span style="font-size:11px;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;color:#6b7280;">${label}</span>
            </td>
            <td style="padding:14px 0 14px 16px;border-bottom:1px solid #e5e7eb;font-size:15px;line-height:1.5;">
                ${displayValue}
            </td>
        </tr>
    `
}

export function buildContactEmailHtml(data: ContactFormData): string {
    const fullName = `${data.firstName} ${data.lastName}`
    const safeMessage = escapeHtml(data.message).replace(/\n/g, '<br>')
    const submittedAt = new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata',
    })

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f3f4f6;padding:32px 16px;">
        <tr>
            <td align="center">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(27,42,109,0.12);">
                    <tr>
                        <td style="background:linear-gradient(135deg,#1b2a6d 0%,#2563eb 100%);padding:28px 32px;">
                            <p style="margin:0 0 8px;font-size:11px;font-weight:800;letter-spacing:0.25em;text-transform:uppercase;color:rgba(255,255,255,0.75);">
                                QuantumSight Technologies
                            </p>
                            <h1 style="margin:0;font-size:28px;line-height:1.2;color:#ffffff;font-weight:800;">
                                New Contact Inquiry
                            </h1>
                            <p style="margin:10px 0 0;font-size:14px;line-height:1.6;color:rgba(255,255,255,0.88);">
                                A visitor submitted the contact form on your website.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:28px 32px 8px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                ${fieldRow('Name', fullName)}
                                ${fieldRow('Email', data.email, true)}
                                ${fieldRow('Phone', data.phone)}
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:8px 32px 28px;">
                            <p style="margin:0 0 10px;font-size:11px;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;color:#6b7280;">
                                Message
                            </p>
                            <div style="background-color:#f8fafc;border:1px solid #e5e7eb;border-left:4px solid #2563eb;border-radius:12px;padding:18px 20px;font-size:15px;line-height:1.7;color:#374151;">
                                ${safeMessage}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:0 32px 28px;">
                            <table role="presentation" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td style="border-radius:999px;background-color:#1b2a6d;">
                                        <a href="mailto:${escapeHtml(data.email)}" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">
                                            Reply to ${escapeHtml(data.firstName)}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:18px 32px;background-color:#f8fafc;border-top:1px solid #e5e7eb;">
                            <p style="margin:0;font-size:12px;line-height:1.6;color:#9ca3af;">
                                Received on ${submittedAt} · Sent from QuantumSight Technologies website contact form
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `.trim()
}

export function buildContactEmailText(data: ContactFormData): string {
    const fullName = `${data.firstName} ${data.lastName}`

    return [
        'QUANTUMSIGHT TECHNOLOGIES',
        'New Contact Inquiry',
        '----------------------------------------',
        `Name: ${fullName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        '',
        'Message:',
        data.message,
        '',
        '----------------------------------------',
        `Reply to: ${data.email}`,
    ].join('\n')
}
