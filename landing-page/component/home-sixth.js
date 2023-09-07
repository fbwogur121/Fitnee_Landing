import Image from "next/image";

export default function Home_Sixth(){
    return(
        <div className="sixth">
            <div className="sixth-text">
                <div className="point-text align">루틴 커스텀</div>
                <div className="home-title align" style={{color: 'white'}}>
                    <span>
                        다크모드까지
                        <br />
                        디테일하게 지원해요
                    </span>
                </div>
                <div className="home-subtitle align" style={{color: '#c4c5d4'}}>
                    <span>
                        사용자의 선호에 따라
                        <br />
                        라이트모드와 다크모드를 모두 지원하고 있어요
                    </span>
                </div>
            </div>
            <div className="sixth-img-wrapper">
                <Image
                    src={"/phone/6_darkmode.png"}
                    fill
                    style={{objectFit: 'contain'}}
                    alt="main page 6_darkmode"
                />
            </div>
        </div> 
    )
}