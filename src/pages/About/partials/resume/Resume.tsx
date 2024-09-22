import React, { useRef, useState } from "react";
import ResumeActions from "./ResumeActions";
import { useAppSelector } from "configs/redux/store";

export interface ResumeProps {}

const Resume: React.FC<ResumeProps> = ({ ...props }) => {
  const { userInfo } = useAppSelector((store) => store.firestoreSlice);
  const iframeRef = useRef<HTMLDivElement>(null);
  const [fullScreen, setFullScreen] = useState(false);

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setFullScreen(false);
    } else if (iframeRef.current) {
      iframeRef.current.requestFullscreen();
      setFullScreen(true);
    }

    // Listen to the fullscreen change event (To handle ESC button to exit fullscreen)
    document.onfullscreenchange = () => {
      if (!document.fullscreenElement) {
        setFullScreen(false);
      }
    };
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
          borderRadius: fullScreen ? 0 : 8,
          willChange: "transform",
        }}
      >
        <iframe
          loading="lazy"
          title="Resume"
          style={{
            position: "absolute",
            width: "100%",
            height: fullScreen ? "100dvh" : "100%",
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0,
          }}
          src={userInfo?.links.resume.embed}
        ></iframe>
        {fullScreen && (
          <ResumeActions
            resumeLink={userInfo?.links.resume.pdf || ""}
            fullScreen={fullScreen}
            handleFullScreen={handleFullscreen}
          />
        )}
      </div>
      <ResumeActions
        resumeLink={userInfo?.links.resume.pdf || ""}
        fullScreen={fullScreen}
        handleFullScreen={handleFullscreen}
      />
    </>
  );
};

export default Resume;
