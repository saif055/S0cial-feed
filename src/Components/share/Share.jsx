import React from 'react';
import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/yamuna ghat.jpg" alt="" />
          <input
            placeholder="What's in your mind?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">

            <div className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>

            <div className="shareOption">
              <LabelIcon htmlColor="grey" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>

            <div className="shareOption">
              <RoomIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>

            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="yellow" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
        <button className="shareButton">Share</button>
        </div>
      </div>
    </div>

  );
}

export default Share;
