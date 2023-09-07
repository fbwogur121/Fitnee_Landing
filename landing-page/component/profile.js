import Image from "next/image";
import Link from "next/link";

export default function profile({info}){
    return(
        <div className="profile-wrapper">
            <div className="img-wrapper">
                <Image 
                    src={`/image/${info.name}.png`}
                    fill
                    style={{objectFit:'contain'}}
                    alt="about us - profile img"
                />
            </div>
            <div className="profile-name">{info.name}</div>
            <div className="profile-position">{info.position}</div>
            <div className="profile-btn-container">
                <Link href={`mailto:${info.email}`}>
                    <Image
                        src='/image/email.png'
                        width={24}
                        height={24}
                        className="profile-btn"
                        alt="about us - email btn"
                    />
                </Link>
                {   
                    info.sns?
                    <Link href={info.sns} rel="noopener noreferrer" target="_blank">
                        <Image
                            src='/image/sns.png'
                            width={24}
                            height={24}
                            className="profile-btn"
                            alt="about us - sns btn"
                        />
                    </Link>
                    :
                    null
                }
                {
                    info.site?
                    <Link href={info.site} rel="noopener noreferrer" target="_blank">
                        <Image
                            src='/image/site.png'
                            width={24}
                            height={24}
                            className="profile-btn"
                            alt="about us - site btn"
                        />
                    </Link>
                    :
                    null
                }
            </div>
        </div>
    )    
}