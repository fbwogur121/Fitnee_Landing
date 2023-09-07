import Image from "next/image";

export default function Modal2({ setModalOpen }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="modal-container">
      <div
        className="modal-close"
        style={{
          position: "sticky",
        }}
        onClick={closeModal}
      >
        <Image src={'/image/close-circle.svg'} width={24} height={24} alt="닫기 이미지" />
      </div>
      <div
        className="modal-terms"
        style={{ overflow: "auto", whiteSpace: "pre-wrap" }}
      >{`마케팅 정보 수신 동의

1) Fitnee는 서비스를 운영함에 있어 각종 정보를 서비스 화면에 게재하거나 전자우편 및 서신우편 등의 방법으로 회원에게 제공할 수 있습니다. 

    단, 수신거절의 의사를 명백히 표시한 회원에 대해서는 더 이상 전자우편 또는 서신우편 등을 발송하지 않습니다.

2) Fitnee는 서비스의 운영과 관련하여 홈페이지, 서비스 화면, SMS, 전자우편 등에 광고 등을 게재할 수 있습니다.`}</div>
    </div>
  );
}
