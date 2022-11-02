import React from "react";
import { useFlags } from "launchdarkly-react-client-sdk";

const showAdmin = (isAdmin: boolean) => {
  if (isAdmin) {
    return (<div> <h2>Congratulations on being an admin!</h2>
    <p>Access your Feature Flags <a href="https://app.launchdarkly.com">here:</a></p>
    </div>)
  }
  return ''
}
export const Greeting: React.FC = () => {
  const { isAdmin } = useFlags()
  return (
    <div>
          <h2>Welcome to my WorkRamp Demo application</h2>
      {showAdmin(isAdmin)}
    </div>
  )
}