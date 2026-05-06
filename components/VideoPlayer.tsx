"use client";

import React from "react";
import dynamic from "next/dynamic";

const Player = dynamic(() => import("react-player"), { ssr: false });

type VideoPlayerProps = {
  url?: string;
  playing?: boolean;
  controls?: boolean;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
};

export default function VideoPlayer(props: VideoPlayerProps) {
  return <Player {...(props as object)} />;
}
