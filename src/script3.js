'use strict';

const newname = "山田太郎"

var Header = React.createClass({
    render: function() {
        return (
        <div className='CommentBox'>
         {newname}
          </div>
        );
    }
});

ReactDOM.render(
    <Header />,
    document.getElementById('userName')
);
