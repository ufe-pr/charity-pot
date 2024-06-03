"use client";

import { FLOWISE_FLOW_ID, FLOWISE_URL } from "@/config/constants";
import { BubbleChat } from "flowise-embed-react";
import { useEffect, useState } from "react";

export default function AIChat() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    window.onresize = (e) => setWindowWidth(window.innerWidth);
    window.onload = (e) => setWindowWidth(window.innerWidth);
    if (window) {
      setWindowWidth(window.innerWidth);
    }
  }, []);
  return (
    <BubbleChat
      chatflowid={FLOWISE_FLOW_ID}
      apiHost={FLOWISE_URL}
      theme={{
        button: {
          backgroundColor: "#d94302",
          customIconSrc: "/static/images/babydogecharity.png",
          size: "large",
        },
        chatWindow: {
          width: Math.min(windowWidth - 20 * 2, 500),
          welcomeMessage: "Hello there, I'm Charity! How can I help you today?",
          userMessage: {
            backgroundColor: "#d94302",
          },
          poweredByTextColor: "transparent",
        },
      }}
    />
  );
}
