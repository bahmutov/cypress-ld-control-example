import React from 'react';
import styled from 'styled-components';
import { useFlags } from 'launchdarkly-react-client-sdk';

const Root = styled.div`
  color: #001b44;
`;
const Heading = styled.h1`
  color: #00449e;
`;
const ListItem = styled.li`
  margin-top: 10px;
`;
const FlagDisplay = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const FlagOn = styled.span`
  color: #96bf01;
`;
const HooksDemo = () => {
  const { devTestFlag } = useFlags();

  return (
    <Root>
      <Heading>Hooks Demo</Heading>
      <div>
        This is the equivalent demo app using hooks. To run this example:
        <ul>
          <ListItem>
            In app.js, set clientSideID to your own Client-side ID. You can find this in your ld portal under Account
            settings / Projects.
          </ListItem>
          <ListItem>
            Create a flag called dev-test-flag in your project. Make sure you make it available for the client side js
            sdk.
          </ListItem>
          <ListItem>Turn the flag on and off to see this app respond without a browser refresh.</ListItem>
        </ul>
      </div>
      <FlagDisplay>{devTestFlag ? <FlagOn>Flag on</FlagOn> : <span>Flag off</span>}</FlagDisplay>
    </Root>
  );
};

export default HooksDemo;
