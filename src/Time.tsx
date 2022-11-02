import React from "react";
import { useFlags } from "launchdarkly-react-client-sdk";

const date = new Date();
const showTime = date.getHours()
    + ':' + date.getMinutes()
    + ":" + date.getSeconds();

const currentTime = (isTime: boolean) => {
    if (isTime) {
        return (<div> <p>The current time is: {showTime}</p>
      </div>)
    }
    return ''
  }
  export const Time: React.FC = () => {
    const { isTime} = useFlags()
    return (
        <div>
            {currentTime(isTime)}
      </div>
    )
  }