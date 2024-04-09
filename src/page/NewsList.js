import React, { useState } from 'react';
import NewsDB from '../datbase/NewsDB';
function NewsList({ filterClass }) {
    const filteredData = NewsDB.filter(item => filterClass.includes(item.class));
    return (
        <>
        {NewsDB.map((item,i)=>{
            
            return (
            <div className="listWrap" key={i}>
                <div className="imgWrap"><img src={`${process.env.PUBLIC_URL}/images/news/${item.image}`} alt="" /></div>
                <ul>
                    <li>{filteredData == item.class}</li>
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