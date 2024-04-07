import axios from 'axios';
import React, { useEffect, useState } from 'react';
function News() {
    // const newData = NewsData();
    const tabMenu = ([
    "전체",
    "소식",
    "공지사항",
    "이벤트"
    ]);
    const [num,setNum] = useState(0);
    const newsList = ([
    {title : "제목입니다."},
    {title : "제목입니다2."},
    {title : "제목입니다3."},
    {title : "제목입니다4."}
    ]);
    
    const [viewData, setViewData] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [listCnt, setListCnt] = useState(10);

    useEffect(()=>{
        axios 
        .get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}_limit=${listCnt}`)
        .then((res)=>{
            console.log(res.data)
            setViewData(res.data);
            console.log(res.headers["x-total-count"]);
            let totalRecord = res.headers["x-total-count"];
            let totalPage = Math.ceil(totalRecord / listCnt);
            setTotalPage(totalPage);
        })
        .catch((err)=>{
            console.error(err);
        });
    },[currentPage]);
    const pagNumber =() =>{
        const pageNumbers =[];
        const page = 10;
        {/*let startPage = Math.floor((page-1)/listCnt * listCnt +1);
        let endPage = startPage + listCnt -1;
        let prev = () => setCurrentPage(listCnt -1);
    let next = () => setCurrentPage(listCnt +1);*/}
        for (let i;i <=10; i++) {
            pageNumbers.push(
                <li key={i} onClick={()=>setCurrentPage(i)}>{i}</li>
            );
        }
        return pageNumbers;
    }
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
            {/* {newsList[num].title} */}
            {totalPage}
            {viewData.map((item)=>{
                return <div>{item.title}</div>;
            })}
            </div>
            <div className='pagination'>
                <div>이전</div>
                <ul className='page'>{pagNumber()}</ul>
                <div>다음</div>
            </div>
        </div>
    )
    }
export default News