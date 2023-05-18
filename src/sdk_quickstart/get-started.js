import React from "react";
import AgoraManager from "./AgoraManager";
import VideoCallUI from "./AgoraUI";

// Initialize the Agora application ID, token, and channel name
const appId = '';
const token = '';
const channelName = '';

// VideoCall class inherits from AgoraManager
class VideoCall extends AgoraManager {
  async componentDidMount() {
    // Set the Agora application ID, channel name, and token in the component state
    this.setState({
      appId: appId,
      channelName: channelName,
      token: token
    });
    // Initialize the AgoraManager
    await this.initialize();
  }

  // Handler for joining the video call
  handleJoinCall = async () => {
    await this.joinCall();
  };

  // Handler for leaving the video call
  handleLeaveCall = async () => {
    await this.leaveCall();
  };

  render() {
    const { joined, showVideo, localVideoTrack, remoteVideoTrack } = this.state;
    return (
      // Render the VideoCallUI component with the necessary props
      <VideoCallUI
        joined={joined}
        showVideo={showVideo}
        localVideoTrack={localVideoTrack}
        remoteVideoTrack={remoteVideoTrack}
        handleJoinCall={this.handleJoinCall}
        handleLeaveCall={this.handleLeaveCall}
      />
    );
  }
}

export default VideoCall;