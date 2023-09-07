import Image from "next/image";

export default function Home_Fourth(){
    return(
    <div className="fourth">
        <div className="fourth-text-wrapper">
            <div className="fourth-text">
                <div className="point-text">운동 과정</div>
                <div className="text-group">
                <div className="home-title" id="fourth-title">
                    <span>
                    운동 전 과정을
                    <br/>
                    트래킹하고 있어요
                    </span>
                </div>
                <div className="home-subtitle" id="fourth-subtitle">
                    <span>
                    운동, 운동대체, 휴식, 세트 건너뛰기 등<br />
                    실제 운동상황에 맞는 UI를 구현했어요.
                    </span>
                </div>
            </div>
            </div>
        </div>
        <div className="fourth-img-container">
            <div className="fourth-img-wrapper" id="fourth-img">
                <Image
                    src={"/phone/4_start.png"}
                    fill
                    style={{ objectFit: 'contain' }}
                    alt="main page 4_start"
                />
            </div>            
            <div className="fourth-img-wrapper" id="fourth-img">
                <Image
                    src={"/phone/4_timer.png"}
                    fill
                    style={{ objectFit: 'contain' }}
                    alt="main page 4_timer"
                />
            </div>
            <div className="fourth-img-wrapper" id="fourth-img">
                <Image
                    src={"/phone/4_exercise.png"}
                    fill
                    style={{ objectFit: 'contain' }}
                    alt="main page 4_exercise"
                />
            </div>
            <div className="fourth-img-wrapper" id="fourth-img">
                <Image
                    src={"/phone/4_finish.png"}
                    fill
                    style={{ objectFit: 'contain' }}
                    alt="main page 4_finish"
                />
            </div>
            <div className="fourth-img-wrapper">
                <Image 
                    src={"/phone/4_analysis.png"} 
                    fill
                    style={{ objectFit: 'contain' }}
                    alt="main page 4_analysis"
                />
            </div>
        </div>
        <div className="line" />
    </div>
    )
}