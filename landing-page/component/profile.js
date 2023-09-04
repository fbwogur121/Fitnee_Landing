import Image from "next/image";
import Link from "next/link";

export default function profile({info}){

    const sendEmail = ()=>{
        const email = 'amber0809@naver.com';
        window.location.href = `mailto:${email}`;
    }

    return(
        <div className="profile-wrapper">
            <div className="img-wrapper">
                <Image 
                    src={`/image/${info.name}.png`}
                    fill
                    style={{objectFit:'contain'}}
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
                        />
                    </Link>
                    :
                    null
                }
            </div>
        </div>
    )    
}