import React, { Component } from "react";

class VideoCallUI extends Component {
  constructor(props) {
    super(props);
    // Create references for the local and remote video elements
    this.localVideoRef = React.createRef();
    this.remoteVideoRef = React.createRef();
  }

  componentDidMount() {
    // Call the playVideoTracks method when the component mounts
    this.playVideoTracks();
  }

  componentDidUpdate(prevProps) {
    // Check if the local or remote video tracks have changed
    if (
      prevProps.localVideoTrack !== this.props.localVideoTrack ||
      prevProps.remoteVideoTrack !== this.props.remoteVideoTrack
    ) {
      // Call the playVideoTracks method to play the updated tracks
      this.playVideoTracks();
    }
  }

  playVideoTracks() {
    const { localVideoTrack, remoteVideoTrack } = this.props;
    // Play the local video track on the local video element
    if (localVideoTrack) {
      localVideoTrack.play(this.localVideoRef.current);
    }
    // Play the remote video track on the remote video element
    if (remoteVideoTrack) {
      remoteVideoTrack.play(this.remoteVideoRef.current);
    }
  }

  render() {
    const { joined, showVideo, handleJoinCall, handleLeaveCall } = this.props;

    return (
      <div>
        <header className="App-header">
          <h1>Get started with video calling</h1>
        </header>
        <div>
          <div>
            <button onClick={joined ? handleLeaveCall : handleJoinCall}>
              {joined ? "Leave" : "Join"}
            </button>
          </div>
          {showVideo && (
            <div id="videos">
              <div className="vid" style={{ height: "95%", width: "95%" }}>
                {this.props.localVideoTrack && (
                  // Render the local video element using the localVideoRef
                  <video ref={this.localVideoRef} autoPlay />
                )}
              </div>
              <div className="vid" style={{ height: "95%", width: "95%" }}>
                {this.props.remoteVideoTrack && (
                  // Render the remote video element using the remoteVideoRef
                  <video ref={this.remoteVideoRef} autoPlay />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default VideoCallUI;