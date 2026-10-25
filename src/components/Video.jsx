import { useEffect, useRef, useState } from "react";
import playBtn from "../assets/play-button.png";
import pausedBtn from "../assets/paused-icon.png";

const Video = () => {
  const [isPlayed, setIsPlayed] = useState(false);
  const videoRef = useRef(null);

  const operateVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch (err) {
        console.error("Unable to play video", err);
      }
    } else {
      video.pause();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlayed(true);
    const handlePause = () => setIsPlayed(false);
    const handleEnded = () => setIsPlayed(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section className="box relative">
      <video
        loop
        playsInline
        preload="metadata"
        className="rounded-[10px] shadow-xl shadow-white/5"
        src="https://www.pexels.com/download/video/8088612/"
        ref={videoRef}
      />

      <div
        className="absolute inset-0 z-10 bg-black/20 cursor-pointer"
        onClick={operateVideo}
      />

      <button
        aria-label={isPlayed ? "Pause video" : "Play video"}
        className="absolute top-1/2 left-1/2 -translate-1/2 z-20 cursor-pointer"
        onClick={operateVideo}
      >
        {isPlayed ? (
          <img
            src={pausedBtn}
            alt=""
            className="size-20 object-contain md:size-26"
          />
        ) : (
          <img
            src={playBtn}
            alt=""
            className="size-20 object-contain md:size-26"
          />
        )}
      </button>
    </section>
  );
};

export default Video;
