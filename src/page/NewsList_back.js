import React, { useState } from 'react';
import NewsDB from '../datbase/NewsDB';
function NewsList(props) {
    const classData = () =>{
        const allNews = NewsDB.filter(item => item.class === "소식","공지사항","이벤트");
        const nNews = NewsDB.filter(item => item.class === "소식");
        const noticeNews = NewsDB.filter(item => item.class === "공지사항");
        const eventNews = NewsDB.filter(item => item.class === "이벤트");
    } 
    return (
        <>
        {NewsDB.map((item,i)=>{
            return (
            <div className="listWrap" key={i}>
                <div className="imgWrap"><img src={`${process.env.PUBLIC_URL}/images/news/${item.image}`} alt="" /></div>
                <ul>
                    <li>{item.class}</li>
                    <li className="text_tt">{item.title}</li>
                    <li className="text_date">{item.data}</li>
                    <li>{item.body}</li>
                </ul>
            </div>
            )
        })}
    </>
    )
}

export default NewsList