'use client'

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./Header'), {
    ssr: false,
    loading: () => <div style={{ height: '78px' }} aria-hidden="true" />,
})

export default function HeaderLoader() {
    return <Header />
}
