"use client";
export default function Promotion() {
  return (
    <div className="promotion">
      <div className="title">fitnee 사전예약</div>
      <div className="title-sub">
        런칭이 시작되면 작성해주신 메일 주소로 알림을 보내드려요
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = e.target.email.value;
          const options = {
            method: "POST",
            headers: {
              "content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          };
          fetch(`http://localhost:9999/topics`, options)
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
            });
        }}
      >
        <p>
          <input type="email" name="email" placeholder="fitnee@gmail.com" />
        </p>
        <div>
          <input type="checkbox" name="checkbox1" />
          <div>개인정보 수집 및 목적</div>
        </div>
        <div>
          <input type="checkbox" name="checkbox2" />
          <div>마케팅 정보 수신 동의</div>
        </div>
        <p>
          <input type="submit" value="신청하기" />
        </p>
      </form>
    </div>
  );
}
