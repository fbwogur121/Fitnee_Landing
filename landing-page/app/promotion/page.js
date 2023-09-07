"use client";
import Image from "next/image";
import { useState } from "react";
import Checked from "../../public/checked.svg";
import NonChecked from "../../public/non-checked.svg";

export default function Promotion() {
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  // email 입력 값이 있고, checkbox1 및 checkbox2가 모두 선택되어야 버튼이 활성화됩니다.
  const isSubmitEnabled = email && checkbox1 && checkbox2 && tel;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitEnabled) {
      // email과 tel을 객체로 묶어서 전송합니다.
      const data = {
        email,
        tel,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // email과 tel 객체를 전송합니다.
      };

      fetch("http://localhost:9999/topics", options)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    }
  };

  return (
    <div className="promotion">
      <div className="promotion-title">fitnee 사전예약</div>
      <div className="promotion-sub-title">
        런칭이 시작되면 작성해주신 메일 주소로
        <br />
        알림을 보내드려요
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="email"
            name="email"
            className="input" // 클래스 추가
            placeholder="fitnee@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="tel"
            name="tel"
            className="input" // 클래스 추가
            placeholder="01012345678"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        <div className="checkbox-wrapper">
          <div className="checkbox-container">
            <div className="checkbox" onClick={() => setCheckbox1(!checkbox1)}>
              {checkbox1 ? (
                <Image src={Checked} width={24} height={24} alt="체크 이미지" />
              ) : (
                <Image src={NonChecked} width={24} height={24} />
              )}
            </div>
            <label className="checkbox-label">개인정보 수집 및 목적</label>
            <div className="essential-box">
              <div className="essential">필수</div>
            </div>
          </div>
          <div className="checkbox-container">
            <div className="checkbox" onClick={() => setCheckbox2(!checkbox2)}>
              {checkbox2 ? (
                <Image src={Checked} width={24} height={24} alt="체크 이미지" />
              ) : (
                <Image src={NonChecked} width={24} height={24} />
              )}
            </div>
            <label className="checkbox-label">마케팅 정보 수신 동의</label>
            <div className="essential-box">
              <div className="essential">필수</div>
            </div>
          </div>
        </div>
        <p>
          <input
            type="submit"
            className={`submit-button ${isSubmitEnabled ? "" : "disabled"}`} // 클래스 추가
            value="신청하기"
            style={{
              color: isSubmitEnabled ? "white" : "black",
              background: isSubmitEnabled ? "#8457F1" : "#E0E2EE",
            }}
            disabled={!isSubmitEnabled}
          />
        </p>
      </form>
    </div>
  );
}
