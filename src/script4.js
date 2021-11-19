'use strict';

// test data
var instDatas = []
instDatas[0] = { name:"あさひ園", address: "東京都世田谷区", imgfile:  "img/160324kaigo00.jpg", text1: "緑豊かな眺望", text2: "広い施設でゆったり", text3: "福利厚生が充実"}
instDatas[1] = { name:"みどり園", address: "神奈川県横浜市緑区", imgfile:  "img/construction-24-1356_00.jpg", text1: "経験者優遇", text2: "寮完備", text3: "楽しい雰囲気で働けます。"}
instDatas[2] = { name:"エーデルワイス", address: "埼玉県さいたま市旭ヶ丘", imgfile:  "img/in0023_mv-pc.jpg", text1: "急募：サービス施設管理者", text2: "ゆとりある入居人数", text3: "充実した設備の中、心温まるアットホームなやすらぎ空間"}

function PlainCard(props) {
  return (
    <div className="plain_card">
      <div className="img_cont"><img src={instDatas[props.lnum].imgfile} className="fit_image"/></div>
      <div className="txt_cont">
          {instDatas[props.lnum].name} <br />
          {instDatas[props.lnum].address}
          <ul className="plain_list">
              <li>{instDatas[props.lnum].text1}</li>
              <li>{instDatas[props.lnum].text2}</li>
              <li>{instDatas[props.lnum].text3}</li>
          </ul>
      </div>
    </div>
  );
}

const ReturnCards = () => {
    const items = [];
    for (let i = 0; i < instDatas.length; i++) {
        items.push(<PlainCard lnum= {i} />);
    }
    return <div className="flex_container">{items}</div>;
};

/*
class GetDom extends React.Component {
    render() {
        return (
          <div>
            <p>{returnCards()}</p>
          </div>
        )
    }
}
*/
                   
ReactDOM.render(
    <ReturnCards />,
    document.getElementById('card_content')
)

    