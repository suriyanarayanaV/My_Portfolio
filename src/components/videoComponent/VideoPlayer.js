import "./VideoPlayer.css";
const VideoPlayer = (props) => {
  const dimensions = { width: window.innerWidth };
  return (
    <div className="videoModal">
      <div className="cameraHole" />
      <video
        width={
          (dimensions.width < 540 && "60%") ||
          (dimensions.width >= 540 && "30%")
        }
        controls
        className="videoPlayerModal"
      >
        <source src={props.src} type="video/mp4" />
      </video>
      <button className="videoPlayerCloseBtn" onClick={props.hide}>
        close
      </button>
    </div>
  );
};

export default VideoPlayer;
