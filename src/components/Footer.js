import React from 'react'
import '../assets/css/footer.scss'

function Footer() {
  return (
    <>
    <footer>
        <div className='inner footerLink'>
            <div className='logoWrap'>
                <h1 className='logoGenshin'>genshin</h1>
                <h1 className='hoyobus'>hoyobus</h1>
            </div>
            <div className='linkWrap'>
                <div className='policyWrap'>
                    <li><a href='#' target='_blank'>개인정보방침</a></li>
                    <li><a href='#' target='_blank'>이용약관</a></li>
                    <li><a href='#' target='_blank'>About Us</a></li>
                    <li><a href='#' target='_blank'>개인정보수집 및 이용</a></li>
                    <li><a href='#' target='_blank'>고객센터</a></li>
                </div>
                <div className='snsWrap'>
                    <li className='iconSns naver'><a href='#' target='_blank'>네이버</a></li>
                    <li className='iconSns twitter'><a href='#' target='_blank'>트위터</a></li>
                    <li className='iconSns tictok'><a href='#' target='_blank'>틱톡</a></li>
                    <li className='iconSns youtube'><a href='#' target='_blank'>유튜브</a></li>
                    <li className='iconSns facebook'><a href='#' target='_blank'>페이스북</a></li>
                    <li className='iconSns inster'><a href='#' target='_blank'>인스타</a></li>
                    <li className='iconSns hoyolab'><a href='#' target='_blank'>HOYOLAB</a></li>
                    <li className='iconSns discord'><a href='#' target='_blank'>디스코드</a></li>
                </div>
            </div>
        </div>
        <div className='inner'>
            <p>*확률형 아이템 포함</p>
            <p>"PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.</p>
            <p>Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services are trademarks and/or registered trademarks of Epic Games.</p>
            <p>All other trademarks are the property of their respective owners.</p>
        </div>
        <div className='inner'>Copyright © COGNOSPHERE. All Rights Reserved.</div>
    </footer>
    </>
  )
}

export default Footer