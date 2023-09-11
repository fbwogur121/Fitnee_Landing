"use client";
import Image from "next/image";
import { useState } from "react";
import Checked from "../../public/checked.svg";
import NonChecked from "../../public/non-checked.svg";
import axios from "axios";
import Modal from "@/component/modal";
import Modal2 from "@/component/modal2";

export default function Promotion() {
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [dataModal, setDataModal] = useState(false);
  const [adModal, setAdModal] = useState(false);

  const showDataModal = () => {
    setDataModal(true);
    console.log("데이터 모달 오픈");
  };
  const showAdModal = () => {
    setAdModal(true);
    console.log("광고 모달 오픈");
  };

  const isSubmitEnabled = email && checkbox1 && tel;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const telRegex = /^[0-9]{11}$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (isSubmitEnabled) {
      if (!telRegex.test(tel)) {
        alert("형식에 맞는 전화번호 11자리 를 입력해주세요 ex)01022223333");
        return;
      }
      if (!emailRegex.test(email)) {
        alert("유효한 이메일을 입력해주세요");
        return;
      }
      try {
        const response = await axios.post(
          "https://gpthealth.shop/app/promotion",
          {
            email: email,
            phoneNum: tel,
          }
        );

        if (response.data.code === 1000) {
          console.log(response.data);
          alert("신청이 완료되었습니다.");
          window.location = "/";
        } else if (response.data.code === 903) {
          alert(response.data.message);
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.error(
          "There has been a problem with your axios request:",
          error
        );
      }
    }
  };

  return (
    <div className="promotion">
      <div className="promotion-title">fitnee 사전예약</div>
      <div className="promotion-sub-title">
        런칭이 시작되면 작성해주신 메일 주소로 알림을 보내드려요
      </div>
      <div className="promotion-sub-title-mobile">
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
                <Image
                  src={NonChecked}
                  width={24}
                  height={24}
                  alt="체크 이미지"
                />
              )}
            </div>
            <label className="checkbox-label" onClick={showDataModal}>
              개인정보 수집 및 목적
            </label>
            <div className="essential-box">
              <div className="essential">필수</div>
            </div>
          </div>
          <div className="checkbox-container">
            <div className="checkbox" onClick={() => setCheckbox2(!checkbox2)}>
              {checkbox2 ? (
                <Image src={Checked} width={24} height={24} alt="체크 이미지" />
              ) : (
                <Image
                  src={NonChecked}
                  width={24}
                  height={24}
                  alt="체크 이미지"
                />
              )}
            </div>
            <label className="checkbox-label" onClick={showAdModal}>
              마케팅 정보 수신 동의
            </label>
            <div className="essential-box">
              <div className="essential">선택</div>
            </div>
          </div>
        </div>
        {dataModal && 
          <div className="modal-wrapper">
            <Modal setModalOpen={setDataModal} />
          </div>
        }
        {adModal && 
        <div className="modal-wrapper">
          <Modal2 setModalOpen={setAdModal} />
        </div>
        }
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
