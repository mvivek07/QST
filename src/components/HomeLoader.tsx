'use client'

import dynamic from 'next/dynamic'

const HomePage = dynamic(() => import('./HomePage'), {
    ssr: false,
    loading: () => <div className="min-h-screen bg-white" aria-hidden="true" />,
})

export default function HomeLoader() {
    return <HomePage />
}
