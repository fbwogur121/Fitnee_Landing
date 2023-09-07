'use client';
import { usePathname } from 'next/navigation'

export default function Footer(){
    const pathname = usePathname()
    return(
        <footer className={pathname == '/'? 'dark': null }>Copyright @Fitnee All Rights Reserved</footer>
    )
}