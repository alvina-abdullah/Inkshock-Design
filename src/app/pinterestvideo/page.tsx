"use client";
import { useEffect, useState } from "react";

const PinterestVideo = () => {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    setShowIframe(true); // Delay iframe loading
  }, []);

  return (
    <div className="flex justify-center items-center my-10">
      {showIframe && (
        <iframe
          src="https://assets.pinterest.com/ext/embed.html?id=AYkRR_cZh5bksy8nxpr5zt2W3XdvEJ2AVkIILaOTk0TgJe2zNdQEqEuoh1q5lmnmMSXA8H_iL15emIMnJoU2jAI"
          height="532"
          width="345"
          frameBorder="0"
          scrolling="no"
          className="rounded-lg shadow-lg bg-gray-200"
        ></iframe>
      )}
    </div>
  );
};

export default PinterestVideo;
