import type { FormEvent } from 'react'

export type ContactFormData = {
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[0-9]{10,15}$/

export function filterPhoneInput(value: string): string {
    return value.replace(/\D/g, '').slice(0, 15)
}

export function validateContactFormData(data: ContactFormData): string | null {
    if (!data.firstName.trim()) {
        return 'First name is required.'
    }

    if (!data.lastName.trim()) {
        return 'Last name is required.'
    }

    if (!data.email.trim()) {
        return 'Email is required.'
    }

    if (!data.email.includes('@') || !EMAIL_PATTERN.test(data.email)) {
        return 'Please enter a valid email address (must include @).'
    }

    if (!data.phone.trim()) {
        return 'Phone number is required.'
    }

    if (!PHONE_PATTERN.test(data.phone)) {
        return 'Phone number must contain digits only (10-15 digits).'
    }

    if (!data.message.trim()) {
        return 'Message is required.'
    }

    return null
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
    const validationError = validateContactFormData(data)
    if (validationError) {
        throw new Error(validationError)
    }

    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })

    const result = await response.json().catch(() => ({}))

    if (!response.ok) {
        throw new Error(result.error || 'Failed to send message. Please try again.')
    }
}

export function getContactFormData(form: HTMLFormElement): ContactFormData {
    const formData = new FormData(form)

    return {
        firstName: String(formData.get('firstName') ?? '').trim(),
        lastName: String(formData.get('lastName') ?? '').trim(),
        email: String(formData.get('email') ?? '').trim(),
        phone: filterPhoneInput(String(formData.get('phone') ?? '')),
        message: String(formData.get('message') ?? '').trim(),
    }
}

export function handlePhoneInputChange(e: FormEvent<HTMLInputElement>) {
    e.currentTarget.value = filterPhoneInput(e.currentTarget.value)
}