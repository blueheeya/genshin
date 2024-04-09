import React, { useEffect, useState } from 'react';
import NewsList from '../page/NewsList';
function News(props) {
    const [num,setNum] = useState(0) 
    const newTab = [
        "전체",
        "소식",
        "공지사항",
        "이벤트",
    ]
    const listData = [
        <NewsList filterClass={["소식", "공지사항", "이벤트"]} />,
        <NewsList filterClass={["소식"]} />,
        <NewsList filterClass={["공지사항"]} />,
        <NewsList filterClass={["이벤트"]}/>,
    ]
    return (
        <>
            <div className='container'>
                <ul className='inner tabMenuWrap'>
                {listData.map((item,i)=>{
                    return (
                        <>
                        <li className={`${i == num ? "active":""}`} onClick={()=>{setNum(i)}}>{newTab[i]}</li>
                        </>
                        )
                    })}
                </ul>
                <div className='inner'>{listData[num]}</div>
            </div>
        </>
    )
}
export default News