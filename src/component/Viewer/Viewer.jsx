import React, { useState } from "react";
import Model from "../Model";
import AnchorList from "../PopOvers/Anchors";
import BreakingNews from "../PopOvers/BreakingNews";
import AnchorStandingPlace from "../PopOvers/AnchorStanding";
import NewsHighlights from "../PopOvers/NewsHighlight";
import NowShowing from "../PopOvers/NowShowing";
import { isMobile } from "react-device-detect";

const Viewer = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [hotspotName, setHotspotName] = useState("");
  const [modalContent, setModalContent] = useState(null);

  React.useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleMessage = (event) => {
    const message = event.data;
    let content = null;

    switch (message.hotspotName) {
      case "News1":
        content = <BreakingNews />
        setHotspotName("News1");
        break;
      case "Anchor":
        content = <AnchorList />
        setHotspotName("Anchor");
        break;
      case "Pin1":
      case "Pin2":
        content = <AnchorStandingPlace />
        setHotspotName(message.hotspotName);
        break;
      case "miniScreen1":
      case "miniScreen2":
      case "miniScreen3":
        content = <NewsHighlights highlightName={message.hotspotName} />
        setHotspotName('News Highlight');
        break;
     case 'Screen1':
        content = <NowShowing />
        setHotspotName('Now Showing');
        break;
      default:
        console.log("The Hotspot clicked:", message.hotspotName);
        return;
    }

    setModalContent(content);
    setIsModelOpen(true);
  };

  const closeModel = () => {
    setIsModelOpen(false);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        title="home"
        src={"https://ayesha9142.github.io/3DModelViewer"}
        frameBorder="0"
        width="100%"
        height={isMobile ? '100%' : "700"}
      ></iframe>

      {isModelOpen && (
        <Model
          hotspotName={hotspotName}
          content={modalContent}
          onClose={closeModel}
        />
      )}
    </div>
  );
};

export default Viewer;
