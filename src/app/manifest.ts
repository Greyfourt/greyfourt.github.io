import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Greyfourt Portfolio - Nazli Ozcubukcuoglu',
        short_name: 'Greyfourt\'s Portfolio',
        description: 'Welcome to my portfolio ! Sit back, browse through my work and enjoy.',
        start_url: '/',
        display: 'standalone',
        icons: [
            {
                src: 'app/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
