import React, { useEffect, useState } from 'react';
import AllData from '../datbase/AllData';
import NewsData from '../datbase/NewsData';
import NoticeData from '../datbase/NoticeData';
import EventData from '../datbase/EventData';
function News(props) {
    const [num,setNum] = useState(0) 
    const newTab = [
        "전체",
        "소식",
        "공지사항",
        "이벤트",
    ]
    const listData = [
        <AllData />,
        <NewsData/>,
        <NoticeData />,
        <EventData />,
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