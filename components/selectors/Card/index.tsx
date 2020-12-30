import React from "react";
import { Container } from "../Container";
import { CardSettings } from "./CardSettings";
import { Element, useNode } from "@craftjs/core";
import { Button } from "../Button";
import { Text } from "../Text";

export const CardTop = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div
      {...props}
      ref={connect}
      className="text-only"
      style={{
        padding: "10px",
        marginBottom: "10px",
        borderBottom: "1px solid #eee",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {children}
    </div>
  );
};

export const CardBottom = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div title="only-buttons" ref={connect} className="w-full mt-5" {...props}>
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    canMoveIn: (incomingNode) => incomingNode.data.type === Text,
  },
};

CardBottom.craft = {
  rules: {
    canMoveIn: (node) => node.data.type == Button,
  },
};

export const Card = (props: any) => {
  return (
    <Container {...props}>
      <Element canvas id="text" is={CardTop}>
        <Text text="Only texts" fontSize="24" />
        <Text text="are allowed up here" fontSize="14" />
      </Element>
      <Element canvas id="wow" is={CardBottom}>
        <Button />
        <Button
          buttonStyle="outline"
          color={{ r: 255, g: 255, b: 255, a: 1 }}
        />
      </Element>
    </Container>
  );
};

// Card.craft = {
//   ...Container.craft,
//   displayName: "Card",
// };
// export const defaultProps = {
//   background: "#ffffff",
//   padding: ["20", "20", "20", "20"],
//   margin: ["0", "0", "0", "0"],
//   shadow: 40,
// };
Card.craft = {
  //props: ContainerDefaultProps,
  //props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: CardSettings,
  },
};
