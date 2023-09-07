import Image from "next/image";

export default function Home_Fifth(){
    return(
        <div className="fifth">
            <div className="fifth-img-wrapper" id="fifth-1">
                <Image
                    src={"/phone/5_calendar.svg"}
                    fill
                    style={{objectFit: 'contain'}}
                    alt="main page 5_calendar"
                />
            </div>
            <div className="fifth-img-wrapper" id="fifth-2">
                <Image
                    src={"/phone/5_graph.png"}
                    fill
                    style={{objectFit: 'contain'}}
                    alt="main page 5_graph"
                />
            </div>
            <div className="fifth-img-wrapper" id="fifth-3">
                <Image
                    src={"/phone/5_analysis.svg"}
                    fill
                    style={{objectFit: 'contain'}}
                    alt="main page 5_analysis"
                />
            </div>

            <div className="fifth-text">
                <div className="point-text" style={{marginBottom: 10}}>마이페이지</div>
                <div className="home-title" style={{lineHeight: 1.5, marginBottom: 10}}>
                    <span>
                        기록, 분석, 루틴 내용
                        <br />
                        모두 자동으로 업데이트 돼요
                    </span>
                </div>
                <div className="home-subtitle">
                    <span>
                        캘린더와 그래프를 통해 한눈에 나의 운동 현황을
                        <br className="desktop"/>
                        분석할 수 있어요.
                    </span>
                </div>
            </div>
        </div>
    )
}