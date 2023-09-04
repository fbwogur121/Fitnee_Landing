"use client";
import { useState } from "react";

export default function Promotion() {
  const [email, setEmail] = useState("");
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  // email 입력 값이 있고, checkbox1 및 checkbox2가 모두 선택되어야 버튼이 활성화됩니다.
  const isSubmitEnabled = email && checkbox1 && checkbox2;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitEnabled) {
      // 버튼이 활성화되었을 때만 요청을 보냅니다.
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
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
      <div className="title">fitnee 사전예약</div>
      <div className="title-sub">
        런칭이 시작되면 작성해주신 메일 주소로 알림을 보내드려요
      </div>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="email"
            name="email"
            placeholder="fitnee@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <div>
          <input
            type="tel"
            name="tel"
            placeholder="01012345678"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkbox1}
            onChange={(e) => setCheckbox1(e.target.checked)}
          />
          <div>개인정보 수집 및 목적</div>
        </div>
        <div>
          <input
            type="checkbox"
            name="checkbox2"
            checked={checkbox2}
            onChange={(e) => setCheckbox2(e.target.checked)}
          />
          <div>마케팅 정보 수신 동의</div>
        </div>
        <p>
          <input type="submit" value="신청하기" disabled={!isSubmitEnabled} />
        </p>
      </form>
    </div>
  );
}
