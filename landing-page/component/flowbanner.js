import Image from "next/image";

export default function FlowBanner(){

    return(
        <>
        <div className="flow-container">
            <div className="flow-wrapper">
                <div className="second-banner original">
                {
                    Array.from({ length: 17 }, (_, index) => index + 1)
                    .map((value) => (
                        <div className="second-gif-wrapper">
                            <Image
                                priority
                                src={`/temp/${value}.png`}
                                width={320}
                                height={320}
                                id="second-gif"
                            />
                        </div>
                    ))
                }
                </div>
                <div className="second-banner clone">
                {
                    Array.from({ length: 17 }, (_, index) => index + 1)
                    .map((value) => (
                        <div className="second-gif-wrapper">
                            <Image
                                // priority
                                src={`/temp/${value}.png`}
                                width={320}
                                height={320}
                                id="second-gif"
                            />
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
        </>
    )
}