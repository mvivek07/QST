'use client'

import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('./Footer'), {
    ssr: false,
    loading: () => <div style={{ height: '120px' }} aria-hidden="true" />,
})

export default function FooterLoader() {
    return <Footer />
}
