import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "./features/appSlicer";
import "./SidebarChannel.css";

function SIdebarChannel({ id, channelName }) {
  const dispatch = useDispatch();

  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channelName}
      </h4>
    </div>
  );
}

export default SIdebarChannel;
