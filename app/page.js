"use client";

import dynamic from "next/dynamic";

// Load the heavy component client-side only (MapLibre needs window)
const OpenAcreApp = dynamic(() => import("../components/OpenAcreApp"), {
  ssr: false
});

export default function Page() {
  return <OpenAcreApp />;
}
