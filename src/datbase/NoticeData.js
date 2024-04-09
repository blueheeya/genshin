    const Noticelist = [
        {  
            class : "이벤트",
            title : "원신 | EP - 모든 것을 씻어내리는 비",
            data : "2024.04.05",
            image: "mond_char_2.png",
            body : "「하아… 역시나 필요한 자금을 잘못 계산했군. 지금 가진 자금으로는 프로젝트를 실행할 수 없겠어. 그래도 일찍 접으면 재기할 기회가 있겠지. 일단 이거라도 받아 줘. 앞으로도 많은 응원 부탁해!」[원석x40] 보상 수령하기: https://hoyo.link/chAiFKAL* 보상 수령 기간은 2024년 4월 4일 00:59(한국시간)까지입니다. 잊지 말고 웹페이지에서 보상을 수령해 주세요!웹페이지에서 보상을 수령하면 게임 내 우편으로 보상이 전달됩니다. 우편의 유효 기간은 30일이니 잊지 말고 수령해 주세요"
        },
        {  
            class : "이벤트",
            title : "원신 | EP - 모든 것을 씻어내리는 비",
            data : "2024.04.05",
            image: "mond_char_2.png",
            body : "「하아… 역시나 필요한 자금을 잘못 계산했군. 지금 가진 자금으로는 프로젝트를 실행할 수 없겠어. 그래도 일찍 접으면 재기할 기회가 있겠지. 일단 이거라도 받아 줘. 앞으로도 많은 응원 부탁해!」[원석x40] 보상 수령하기: https://hoyo.link/chAiFKAL* 보상 수령 기간은 2024년 4월 4일 00:59(한국시간)까지입니다. 잊지 말고 웹페이지에서 보상을 수령해 주세요!웹페이지에서 보상을 수령하면 게임 내 우편으로 보상이 전달됩니다. 우편의 유효 기간은 30일이니 잊지 말고 수령해 주세요"
        },
    ]
    function NoticeData(props) {
        return (
            <>
                {Noticelist.map((item,i)=>{
                    return (
                    <div className="listWrap">
                        <div className="imgWrap"><img src={`${process.env.PUBLIC_URL}/images/news/${Noticelist[i].image}`} alt="" /></div>
                        <ul>
                            <li className="text_tt">{Noticelist[i].title}</li>
                            <li className="text_date">{Noticelist[i].data}</li>
                            <li>{Noticelist[i].body}</li>
                        </ul>
                    </div>
                    )
                })}
            </>
        )
    }
export default NoticeData;