import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Time = () => (
  <span className="time">3h ago</span>
  );
  const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
  );
  const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
  );
  const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
  );
  const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
  );


  function Tweet() {
    return (
    <div className="tweet">
    <Avatar/>
    <div className="content">
    <Author/><Time/>
    <Message/>
    <div className="buttons">
    <ReplyButton/>
    <RetweetButton/>
    <LikeButton/>
    <MoreOptionsButton/>
    </div>
    </div>
    </div>
    );
    }

ReactDOM.render(<Tweet/>,
    document.querySelector('#root'));

    function Avatar() {
      return (
        <img 
        src="https://picsum.photos/200"
        className="avatar"
        alt="avatar" />
      );
    }

    function Message() {
      return (
      <div className="message">
      I am a front-end web developer from SLC, Utah. Check out my portfolio in my bio. RT if you like the goods. 
      </div>
      );
      }

      function Author() {
        return (
        <span className="author">
        <span className="name">kolton</span>
        <span className="handle">@misterkolton</span>
        </span>
        );

        }
       

                