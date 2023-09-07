'use client';

import { usePathname } from 'next/navigation'
import { useEffect } from 'react';

export default function Footer(){
    const pathname = usePathname()

    return(
        <footer className={pathname == '/'? 'dark': null }>Copyright @Fitnee All Rights Reserved</footer>
    )
}