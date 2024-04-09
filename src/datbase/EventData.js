const Eventlist = [
    {  
        class : "이벤트",
        title : "당신의 고양이는?",
        data : "2024.04.05",
        image : "news_img_1.jpg",
        body : "「이 테스트지? 키라라가 줬어. 나와 인연이 있는 고양이를 찾아낼 수 있다더라고",
    },
    {  
        class : "이벤트",
        title : "원신 | EP - 모든 것을 씻어내리는 비",
        data : "2024.04.05",
        image: "news_img_2.jpg",
        body : "「하아… 역시나 필요한 자금을 잘못 계산했군. 지금 가진 자금으로는 프로젝트를 실행할 수 없겠어."
    },
    ]
function EventData(props) {
    return (
        <>
        {Eventlist.map((item,i)=>{
            return (
            <div className="listWrap">
                <div className="imgWrap"><img src={`${process.env.PUBLIC_URL}/images/news/${Eventlist[i].image}`} alt="" /></div>
                <ul>
                    <li className="text_tt">{Eventlist[i].title}</li>
                    <li className="text_date">{Eventlist[i].data}</li>
                    <li>{Eventlist[i].body}</li>
                </ul>
            </div>
            )
        })}
    </>
    )
}
export default EventData;