import Image from "next/image";

export default function Home_First(){
    return(
        <div className="first">
          <div className="first-text">
            <div className="point-text">루틴 생성</div>
            <div className="home-title">
              <span>
                간단한 질문만으로
                <br />
                맞춤 헬스 루틴을 만들 수 있어요
              </span>
            </div>
            <div className="home-subtitle">
              <span>
                4가지 질문과 회원가입 시 가입하신 신체정보를
                <br />
                기반으로 유저에게 딱 맞는 루틴을 생성해요.
              </span>
            </div>
          </div>
          <div className="first-img-container">
            <div className="first-img-wrapper" id="first-1">
                <Image
                    src={"/phone/1_1RM.png"}
                    fill
                    style={{ objectFit: 'contain' }}
                    alt="main page 1_1RM"
                />
            </div>
            <div className="first-img-wrapper" id="first-2">
                <Image
                    src={"/phone/1_createRoutine.png"}
                    fill
                    style={{ objectFit: 'contain' }}
                    alt="main page 1_createRoutine"
                />
            </div>
          </div>
        </div>
    )
}