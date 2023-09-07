import Image from "next/image";
import FlowBanner from "./flowbanner";

export default function Home_Second(){
    return(
        <div className="second">
            <div className="second-main">
                <div className="second-img-wrapper">
                    <Image
                        src={"/phone/2_mainScreen.png"}
                        fill
                        style={{ objectFit: 'contain'}}
                        quality={100}
                    />
                </div>  
                <div className="second-text">
                    <div className="point-text">운동 사전</div>
                    <div className="home-title" style={{ marginBottom: 8 }}>
                    <span>캐릭터로 쉽게 배우는 운동자세</span>
                    </div>
                    <div className="home-subtitle">
                    <span>
                        30개의 캐릭터 모션을 통해 혼자서 감 잡기 어려웠던 운동 자세를
                        재미있게 배울 수 있어요.
                    </span>
                    </div>
                </div>
            </div>
            <FlowBanner/>
        </div>
    )
}