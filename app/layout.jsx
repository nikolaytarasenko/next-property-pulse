import '@/assets/styles/globals.css'

export const metadata = {
    title: 'PropertyPulse | Find The Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rental, find properties'
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div>{children}</div>
            </body>
        </html>
    )
}

export default RootLayout