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
          <div>게임 다운로드</div>
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
        <div>쿠폰을 다운받읍시다</div>
      </>
    )
  }
  function LoginPop(props){
    return (
      <>
        <div>로그인을 합시다.</div>
      </>
    )
  }

// export default Modal
export {Modal,DownPletform,CouponPop,LoginPop}