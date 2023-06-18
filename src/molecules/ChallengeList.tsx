import React, { ReactElement } from "react";
import BtnJoinChallenge from "./buttons/BtnJoinChallenge";
import BtnChallengeKeyword from "./buttons/BtnChallengeKeyword";
import BtnChallengeHeartIcon from "./buttons/BtnChallengeHeartIcon";
import { FaRegCommentAlt } from "react-icons/fa";

const ChallengeList = (): ReactElement => {
  return (
    <div className="challenge-list">
      <div className="challenge-list__mentor-info">
        <div className="challenge-list__heart-icon-box">
          <BtnChallengeHeartIcon />
        </div>
        <div className="challenge-list__message-icon-box">
          <FaRegCommentAlt />
        </div>
        <div className="challenge-list__picture"></div>
        <span className="challenge-list__mentor-name-text">멘토 이름</span>
        <div className="challenge-list__major">
          <span className="challenge-list__major-text">전문분야</span>
          <span className="challenge-list__major-text">전문분야</span>
        </div>
      </div>
      <hr className="challenge-list__hr" />
      <div className="challenge-list__footer">
        <span className="challenge-list__keyword-text">키워드</span>
        <div className="challenge-list__keyword-box">
          <BtnChallengeKeyword keyword="#키워드" />
          <BtnChallengeKeyword keyword="#키워드" />
          <BtnChallengeKeyword keyword="#키워드" />
        </div>
        <BtnJoinChallenge />
      </div>
    </div>
  );
};

export default ChallengeList;
