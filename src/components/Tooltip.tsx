import * as RadTooltip from '@radix-ui/react-tooltip';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const test = keyframes`
    0% {
        opacity: 0
    }
    100% {
        opacity: 1
    }
`;

const Content = styled(RadTooltip.Content)`
  border: 2px solid black;
  padding: 0.5em;
  min-width: 2.5em;
  width: fit-content;
  text-align: center;
  border-radius: 12px;
  font-weight: 500;
  animation: 100ms ${test} ease-in-out;
`;

const Arrow = styled(RadTooltip.Arrow)`
  margin-bottom: 0.3em;
  animation: 100ms ${test} ease-in-out;
`;

const Tooltip = (props: React.PropsWithChildren & { content: string | number }) => {
  return (
    <RadTooltip.Root>
      <RadTooltip.Trigger>{props.children}</RadTooltip.Trigger>
      <Content>
        <Arrow />
        {props.content}
      </Content>
    </RadTooltip.Root>
  );
};

export default Tooltip;
