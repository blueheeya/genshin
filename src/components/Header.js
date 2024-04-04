import '../assets/css/header.scss'
import React, { useState } from 'react'
import {Modal,DownPletform,CouponPop,LoginPop} from './Modal'; /* Modal 정보 불러오기 */

export function Header() {
  let [num,setNum] = useState(0);
  let [moNum,setMoNum] = useState(0);
  let [modalView,setModalView] = useState(false);
  let [topMenu] = useState([
    "홈",
    "업데이트정보",
    "월드",
    "캐릭터",
    "소식",
    "일러스트"
  ]);
  const [subSection,setSubSection] = useState([
    <Section1 />,
    "서브페이지 2",
    "서브페이지 3",
    "서브페이지 4",
    "서브페이지 5",
    "서브페이지 6"
  ]);
  const [modalData,setModalData] = useState([
    <DownPletform />,
    <CouponPop />,
    <LoginPop />
  ])
  function modalOpen(idx) {
    setModalView(true);
    setMoNum(idx);
  }
  function modalClsose (){
    setModalView(false);
  }
  return (
    <>
      {/* Modal layer */}
      {modalData.map((item,idx)=>{
        return (
          modalView == true ? (<Modal onClick={modalClsose} viewlistData={modalData} moNum={moNum}/>) : null
        )
      })}
    
      <header>
        <h1>Genshin</h1>
        <div className="nav">
            <ul>
              {subSection.map((item,i)=>{
                return (
                  <li className={`${i == num ? "active":""}`} onClick={()=>{setNum(i)}}>{topMenu[i]}</li>
                )
              })}
              
              </ul>
              <div>
                <li onClick={()=>{modalOpen(1)}}>쿠폰교환</li>
                <li onClick={()=>{modalOpen(2)}}>로그인</li>
                <button className='btn_download' onClick={()=>{modalOpen(0)}}>다운로드</button>
              </div>
        </div>
        </header>
        <div className='container'>
          {subSection[num]}
        </div>
    </>
  )
}
function Section1(){
  return (
    <>
      <div className='container'>
        <div className='inner'>visual</div>
      </div>
      <div className='container'>
        <div className='inner'>
          <h2>최신 소식</h2>
        </div>
      </div>
    </>
  )
}
export default Header