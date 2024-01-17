import { Inter } from 'next/font/google'
import './globals.css'
import '@sendbird/uikit-react/dist/index.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Sendbird Messager',
    description: 'Sendbird Messaging App Tech Task',
}

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
