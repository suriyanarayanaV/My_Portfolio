import "./VideoPlayer.css";
const VideoPlayer = (props) => {
  return (
    <div className="videoModal">
      <div className="cameraHole" />
      <video width={"90%"} controls className="videoPlayerModal">
        <source src={props.src} type="video/mp4" />
      </video>
      <button className="videoPlayerCloseBtn" onClick={props.hide}>
        close
      </button>
    </div>
  );
};

export default VideoPlayer;
