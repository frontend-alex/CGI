import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NERA-CGI',
    short_name: 'NERA-CGI',
    description: 'Your gateway to comprehensive criminal justice information',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/svgs/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
