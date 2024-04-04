import '../src/assets/css/style.css'
import '../src/assets/css/header.css'
import React, { useState } from 'react'
import {Modal,DownPletform,CouponPop,LoginPop} from './components/Modal'; /* Modal 정보 불러오기 */

export function Header() {
  const [num,setNum] = useState(0);
  const [moNum,setMoNum] = useState(0);
  let [modalView,setModalView] = useState(false);
  const [topMenu] = useState([
    "홈",
    "업데이트정보",
    "월드",
    "캐릭터",
    "소식",
    "일러스트"
  ]);
  const [subSection,setSubSection] = useState([
    "서브페이지 1",
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
        <h1>logo</h1>
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
              </div>
            <button className='btn_download' onClick={()=>{modalOpen(0)}}>다운로드</button>
        </div>
        </header>
        <div>{subSection[num]}</div>
    </>
  )
}
// function Modal(props){
//   return (
//     <>
//     <div className='layer'>
//       <button onClick={props.onClick}>close</button>
//       <div className='modalWrap'>
//         {props.viewlistData[props.moNum]}
//         </div>
//     </div>
//     </>
//   )
// }

// function DownPletform(props){
//   return (
//     <>
//       <div>
//         <div>게임 다운로드</div>
//         <ul>
//           <li><a href="#">Windows</a></li>
//           <li><a href="#">PS5</a></li>
//           <li><a href="#">PS4</a></li>
//           <li><a href="#">App Strore</a></li>
//           <li><a href="#">Google Play</a></li>
//           <li><a href="#">Epic Store</a></li>
//         </ul>
//       </div>
//     </>
//   )
// }

// function CouponPop(props){
//   return (
//     <>
//       <div>쿠폰을 다운받읍시다</div>
//     </>
//   )
// }
export default Header