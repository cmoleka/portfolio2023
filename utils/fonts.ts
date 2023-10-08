import { Bitter, DM_Sans } from 'next/font/google'


export const bitter = Bitter({
    subsets: ['latin'],
    variable: '--font-bitter',
    display: 'swap'
})

export const dm_sans = DM_Sans({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-dm-sans",
});
