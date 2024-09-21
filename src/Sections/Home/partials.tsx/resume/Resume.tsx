import React, { useRef, useState } from "react";
import ResumeActions from "./ResumeActions";

export interface ResumeProps {}

const Resume: React.FC<ResumeProps> = ({ ...props }) => {
  const iframeRef = useRef<HTMLDivElement>(null);
  const [fullScreen, setFullScreen] = useState(false);

  const handleFullscreen = () => {
    if (fullScreen) {
      setFullScreen(false);
      if (document.fullscreenElement) document.exitFullscreen();
    } else {
      setFullScreen(true);
      iframeRef.current?.requestFullscreen();
    }
  };

  return (
    <>
      <div
        ref={iframeRef}
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingTop: "141.4286%",
          paddingBottom: 0,
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
          marginTop: "15px",
          overflow: "hidden",
          borderRadius: "8px",
          willChange: "transform",
        }}
      >
        <iframe
          loading="lazy"
          title="Resume"
          style={{
            position: "absolute",
            width: "100%",
            height: fullScreen ? "100vh" : "100%",
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0,
          }}
          src="https://www.canva.com/design/DAFmjLtsppU/8IMTjKRTIsD7ELG6tNMKlw/view?embed"
        ></iframe>
        {fullScreen && (
          <ResumeActions
            fullScreen={fullScreen}
            handleFullScreen={handleFullscreen}
          />
        )}
      </div>
      <ResumeActions
        fullScreen={fullScreen}
        handleFullScreen={handleFullscreen}
      />
    </>
  );
};

export default Resume;
