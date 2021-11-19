'use strict';

// test data

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

function SetLoop() {

    /*
    console.log('set loop in...');
    const items = []
    for (var i = 0; i < instDatas.length; i++) {
        items.push( <PlainCard lnum= {i} />) 
    }
    items.push( <p>aaa</p>)
    return ({ items })
    */
}

var GetDom = function (_React$Component) {
    _inherits(GetDom, _React$Component);

    function GetDom() {
        _classCallCheck(this, GetDom);

        return _possibleConstructorReturn(this, (GetDom.__proto__ || Object.getPrototypeOf(GetDom)).apply(this, arguments));
    }

    _createClass(GetDom, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "flex_container" },
                React.createElement(PlainCard, { lnum: "0" }),
                React.createElement(PlainCard, { lnum: "1" }),
                React.createElement(PlainCard, { lnum: "2" })
            );
        }
    }]);

    return GetDom;
}(React.Component);

ReactDOM.render(React.createElement(GetDom, null), document.getElementById('card_content'));