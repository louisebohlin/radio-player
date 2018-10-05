import React from "react"
import "./station.css"

class Station extends React.Component {
  render() {
    return (
      <div className="station-container">
        <div className="Station">
          <div className="Image-container">
            <img src={this.props.image} />
          </div>
          <div className="Audio-container">
            <h2>{this.props.name}</h2>
            <audio controls>
              <source src={this.props.audio} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    )
  }
}

export default Station
