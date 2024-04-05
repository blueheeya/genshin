import React, { useState } from 'react'
import NenwsData from '../datbase/NewsData';
import NewsData from '../datbase/NewsData';
function News() {
    // const newData = NewsData(); 
    const tabMenu = ([
    "전체",
    "소식",
    "공지사항",
    "이벤트"
    ]);  
    const [num,setNum] = useState(1);  
    const newsList = ([
    "전체",
    "소식",
    "공지사항",
    "이벤트"
    ]);
    
  return (
    <div className='container'>
        <div>
            <ul className='tabMenuWrap'>
                {newsList.map((item,i)=>{
                    return (
                        <li className={`${i == num ? "active":""}`} onClick={()=>{setNum(i)}}>{tabMenu[i]}</li>
                    )
                })}
            </ul>
        </div>
        <div>
        {newsList[num]}
        </div>
    </div>
  )
}
export default News