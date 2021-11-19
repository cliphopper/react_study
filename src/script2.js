'use strict';
/*
var name ='山田 太郎';
*/
/*
var Username = React.createClass({
    render: function(){
      return (
        <div className='CommentBox'>
          山田 太郎
          </div>
    };
});

ReactDOM.render(
    <Username />,
	document.getElementById('userName')
);
*/

// 挨拶を取得してDOMに設定 --- (※4)
const conttext = document.querySelector('#content')
const msg = getGreeting()

ReactDOM.render(msg, conttext)

// 挨拶を返す関数 --- (※5)
function getGreeting () {
  // ランダムな値を得る
  const r = Math.floor(Math.random() * 3)
  // 値に応じてメッセージを返す
  if (r == 0) return <p>今日も頑張りましょう。</p>
  if (r == 1) return <p>こんにちは。</p>
  if (r == 2) return <p>朗らかな日ですね。</p>
};



/*
var World = React.createClass({
    getInitialState: function() {
        console.log("1.getInitialState");
        return {msg: "１番目のテキスト"};
    },
    render: function() {
        console.log("2.render");
        return (
            <p>{this.state.msg}</p>
        );
    },
    componentDidMount: function() {
        var ctrl = this;
        console.log("3.componentDidMount");

        setTimeout(function() {
            ctrl.setState({ msg: "２番目のテキスト"});
        }, 2000);
    }
});

ReactDOM.render(
    <World />,
	document.getElementById('content')
);
*/
/*
var CommentBox = React.createClass({
    render: function(){
      return (
          <div className='CommentBox'>
            Content Boxを表示
          </div>
      )
    };
});
ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);
*/


/*
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#content');
ReactDOM.render(e(LikeButton), domContainer);
*/
