'use strict';

// test data

var instDatas = [];
instDatas[0] = { name: "あさひ園", address: "東京都世田谷区", imgfile: "img/160324kaigo00.jpg", text1: "緑豊かな眺望", text2: "広い施設でゆったり", text3: "福利厚生が充実" };
instDatas[1] = { name: "みどり園", address: "神奈川県横浜市緑区", imgfile: "img/construction-24-1356_00.jpg", text1: "経験者優遇", text2: "寮完備", text3: "楽しい雰囲気で働けます。" };
instDatas[2] = { name: "エーデルワイス", address: "埼玉県さいたま市旭ヶ丘", imgfile: "img/in0023_mv-pc.jpg", text1: "急募：サービス施設管理者", text2: "ゆとりある入居人数", text3: "充実した設備の中、心温まるアットホームなやすらぎ空間" };

function PlainCard(props) {
    return React.createElement(
        "div",
        { className: "plain_card" },
        React.createElement(
            "div",
            { className: "img_cont" },
            React.createElement("img", { src: instDatas[props.lnum].imgfile, className: "fit_image" })
        ),
        React.createElement(
            "div",
            { className: "txt_cont" },
            instDatas[props.lnum].name,
            " ",
            React.createElement("br", null),
            instDatas[props.lnum].address,
            React.createElement(
                "ul",
                { className: "plain_list" },
                React.createElement(
                    "li",
                    null,
                    instDatas[props.lnum].text1
                ),
                React.createElement(
                    "li",
                    null,
                    instDatas[props.lnum].text2
                ),
                React.createElement(
                    "li",
                    null,
                    instDatas[props.lnum].text3
                )
            )
        )
    );
}

var ReturnCards = function ReturnCards() {
    var items = [];
    for (var i = 0; i < instDatas.length; i++) {
        items.push(React.createElement(PlainCard, { lnum: i }));
    }
    return React.createElement(
        "div",
        { className: "flex_container" },
        items
    );
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

ReactDOM.render(React.createElement(ReturnCards, null), document.getElementById('card_content'));