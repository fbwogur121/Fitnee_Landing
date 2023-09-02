import Profile from '../../component/profile'

export default function Home() {

    const title = '피트니를 만드는 사람들'
    const subtitle = '팀 피트니에서 운동 루틴 서비스의 새로운 가능성을 개척하는 9명의 팀원을 소개합니다.'

    const name = ['김형석', '정선아', '황주희', '노이진', '최세호', '김형석', '정선아', '황주희', '노이진']

    return (
        <div className="about-us">
            <div className="title">{title}</div>
            <div className="sub-title">{subtitle}</div>
            <div className='profile-container'>
            {
                name.map(()=>(
                    <Profile/>
                ))
            }
            </div>
        </div>
    )
}
