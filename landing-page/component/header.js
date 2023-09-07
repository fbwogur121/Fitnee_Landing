"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isClicked, setIsClicked] = useState(false);
  const clickMenu = () => setIsClicked(!isClicked);

  return (
    <>
      <header>
        <div className="left-container">
          <Link href="/">
            <Image src={"/logo.png"} fill style={{ objectFit: "contain" }} />
          </Link>
        </div>

        <div className="right-container">
          <div className="icon-container">
            <Link
              href={"https://dis.qa/wMm"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="/image/site.png"
                width={24}
                height={24}
                className="profile-btn"
              />
            </Link>
            <Link
              href={"https://www.instagram.com/fitnee.official/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="/image/sns.png"
                width={24}
                height={24}
                className="profile-btn"
              />
            </Link>
          </div>
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
            alt="tab bar menu"
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
  );
}
