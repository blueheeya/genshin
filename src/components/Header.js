import '../assets/css/header.scss'
import React, { useState } from 'react'
import {Modal,DownPletform,CouponPop,LoginPop} from './Modal'; /* Modal 정보 불러오기 */
import { NavLink } from 'react-router-dom';
export function Header() {
  let [num,setNum] = useState(0);
  let [moNum,setMoNum] = useState(0);
  let [modalView,setModalView] = useState(false);
  const TopMenu = ([
    {
      menuName : "홈",
      url : "/",
      active : "active"
    },
    {
      menuName : "업데이트 정보",
      url : "/updates",
      active : "active"
    },
    {
      menuName : "월드",
      url : "/world",
      active : "active"
    },
    {
      menuName : "캐릭터",
      url : "/characters",
      active : "active"
    },
    {
      menuName : "소식",
      url : "/news",
      active : "active"
    },
    {
      menuName : "일러스트",
      url : "/illustrations",
      active : "active"
    },
  ])
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
  function activeMenu (){
    TopMenu.active(true);
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
            {TopMenu.map((item, i) => (
              <li className={activeMenu} key={i}><NavLink to={TopMenu[i].url} activeClassName="active">{TopMenu[i].menuName}</NavLink></li>
            ))}
          </ul>
          <div>
            <li onClick={()=>{modalOpen(1)}}>쿠폰교환</li>
            <li onClick={()=>{modalOpen(2)}}>로그인</li>
            <button className='btn_download' onClick={()=>{modalOpen(0)}}>다운로드</button>
          </div>
        </div>
        </header>
    </>
  )
}
export default Header