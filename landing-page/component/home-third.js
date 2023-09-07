import Image from "next/image";

export default function Home_Third(){
    return(
        <div className="third">
          <div className="third-text">
            <div className="point-text">루틴 커스텀</div>
            <div className="home-title" id="third-text">
              <span>
                커스텀 페이지에서 상황에 맞게
                <br />
                루틴을 수정할 수 있어요
              </span>
            </div>
            <div className="home-subtitle" id="third-text">
              <span>
                운동, 세트 수, 무게량, 횟수 등 운동하는 데에 있어
                <br />
                필요한 모든 요소들을 커스텀할 수 있어요.
              </span>
            </div>
          </div>
          <div className="third-img-container">
            <div className="third-img-wrapper" id="third-img">
                <Image
                    src={"/phone/3_list.svg"}
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className="third-img-wrapper" id="third-img">
                <Image
                    src={"/phone/3_custom.svg"}
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className="third-img-wrapper">
                <Image 
                    src={"/phone/3_edit.svg"} 
                    width={220} 
                    height={445} 
                />
            </div>

            
          </div>
        </div>

    )
}