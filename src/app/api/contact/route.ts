import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { validateContactFormData, type ContactFormData } from '@/lib/contact'
import { buildContactEmailHtml, buildContactEmailText } from '@/lib/contactEmailTemplate'

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contactus@quantumsighttech.com'

export async function POST(request: Request) {
    try {
        const body = await request.json() as Partial<ContactFormData>

        const validationError = validateContactFormData({
            firstName: String(body.firstName ?? ''),
            lastName: String(body.lastName ?? ''),
            email: String(body.email ?? ''),
            phone: String(body.phone ?? ''),
            message: String(body.message ?? ''),
        })

        if (validationError) {
            return NextResponse.json({ error: validationError }, { status: 400 })
        }

        const data: ContactFormData = {
            firstName: String(body.firstName).trim(),
            lastName: String(body.lastName).trim(),
            email: String(body.email).trim(),
            phone: String(body.phone).trim(),
            message: String(body.message).trim(),
        }

        const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env

        if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
            console.error('Missing SMTP configuration')
            return NextResponse.json(
                { error: 'Email service is not configured. Please contact us directly.' },
                { status: 503 }
            )
        }

        const smtpPass = SMTP_PASS.replace(/\s/g, '')

        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT || 587),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: SMTP_USER,
                pass: smtpPass,
            },
            tls: {
                rejectUnauthorized: true,
            },
        })

        await transporter.verify()

        const fullName = `${data.firstName} ${data.lastName}`

        await transporter.sendMail({
            from: `"QuantumSight Technologies Website" <${SMTP_USER}>`,
            to: CONTACT_EMAIL,
            replyTo: data.email,
            subject: `New inquiry from ${fullName} · QuantumSight Technologies`,
            text: buildContactEmailText(data),
            html: buildContactEmailHtml(data),
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Contact form email error:', error)
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        )
    }
}
