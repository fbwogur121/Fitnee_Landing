'use client';

import {useState} from 'react'
import Link from "next/link";
import Image from "next/image";

export default function Header(){

    const [isClicked, setIsClicked] = useState(false)
    const clickMenu = () => setIsClicked(!isClicked)

    return(
        <>
        <header>
            <Link href="/" className="left-container">
                <Image src={'/logo.png'} fill style={{objectFit: 'contain'}} />
            </Link>
            <div className="right-container">
                <Link href="/aboutus" className="aboutus-btn nav-btn">
                팀 피트니
                </Link>
                <Link href="/promotion" className="promotion-btn nav-btn">
                사전예약하기
                </Link>
                <Image
                src={isClicked ? "/image/close.png" : "/image/hamburger.png"}
                className="nav-menu mobile"
                width={24}
                height={24}
                onClick={clickMenu}
                />
            </div>
        </header>
        {isClicked && (
            <div className="sub-nav mobile">
                <div className="sub-content">
                <Link href="/aboutus" className="aboutus-btn mobile-nav-btn">
                    팀 피트니
                </Link>
                <Link href="/promotion" className="promotion-btn mobile-nav-btn">
                    사전예약하기
                </Link>
                </div>
            </div>
        )}
        </>
    )
}