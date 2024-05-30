"use client";

import { FLOWISE_FLOW_ID, FLOWISE_URL } from "@/config/constants";
import { BubbleChat } from "flowise-embed-react";
import { useLayoutEffect, useState } from "react";

export default function AIChat() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useLayoutEffect(() => {
    window.onresize = (e) => setWindowWidth(window.innerWidth);
  }, []);
  return (
    <BubbleChat
      chatflowid={FLOWISE_FLOW_ID}
      apiHost={FLOWISE_URL}
      theme={{
        button: {
          backgroundColor: "#d94302",
          customIconSrc: "/static/icons/robot.svg",
          size: "large",
        },
        chatWindow: {
          width: Math.min(windowWidth - 20 * 2, 500),
          welcomeMessage: "Hey, I'm Lucy! How can I help you today?",
          userMessage: {
            backgroundColor: "#d94302",
          },
        },
      }}
    />
  );
}
