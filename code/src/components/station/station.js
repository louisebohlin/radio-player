import React from "react"
import "./station.css"

class Station extends React.Component {
  render() {
    const channelColor = {
      backgroundColor: {
        backgroundColor: `#${this.props.backgroundColor}`
      }
    }
    return (
      <div className="station-container">
        <div className="Station" style={channelColor.backgroundColor}>
          <div className="Image-container">
            <img src={this.props.image} />
          </div>
          <div className="Audio-container">
            <div className="Channel-info">
              <h2>{this.props.name}</h2>
            </div>
            <p>{this.props.tagline}</p>
            <div className="Player">
            <audio controls>
                <source src={this.props.audio} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Station
