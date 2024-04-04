import React from 'react'

function Modal(props){
    return (
      <>
      <div className='layer'>
        <button onClick={props.onClick}>close</button>
        <div className='modalWrap'>
          {props.viewlistData[props.moNum]}
          </div>
      </div>
      </>
    )
  }
  
  function DownPletform(props){
    return (
      <>
        <div>
          <h3>게임 다운로드</h3>
          <ul>
            <li><a href="#">Windows</a></li>
            <li><a href="#">PS5</a></li>
            <li><a href="#">PS4</a></li>
            <li><a href="#">App Strore</a></li>
            <li><a href="#">Google Play</a></li>
            <li><a href="#">Epic Store</a></li>
          </ul>
        </div>
      </>
    )
  }
  
  function CouponPop(props){
    return (
      <>
        <div><h3>쿠폰을 다운받읍시다</h3></div>
      </>
    )
  }
  function LoginPop(props){
    return (
      <>
        <div><h3>로그인을 합시다.</h3></div>
      </>
    )
  }

// export default Modal
export {Modal,DownPletform,CouponPop,LoginPop}