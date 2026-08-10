'use client'

import { useState } from 'react'
import { getContactFormData, submitContactForm, handlePhoneInputChange } from '@/lib/contact'

export function useContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        const form = e.currentTarget

        try {
            await submitContactForm(getContactFormData(form))
            form.reset()
            alert('Thank you for contacting QuantumSight Technologies. We will get back to you shortly.')
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return { handleSubmit, handlePhoneInputChange, isSubmitting, error }
}
