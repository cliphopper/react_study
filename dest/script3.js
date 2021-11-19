'use strict';

var newname = "山田太郎";

var Header = React.createClass({
    displayName: 'Header',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'CommentBox' },
            newname
        );
    }
});

ReactDOM.render(React.createElement(Header, null), document.getElementById('userName'));