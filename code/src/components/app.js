import React from "react"
import Station from "./station/station.js"

class App extends React.Component {

   state = {
     stationItems: []
   }

   componentDidMount() {
     fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
       return response.json()
     }).then((json) => {
       this.setState({
         stationItems: json.channels
       })
     })
   }

   render() {
     if (this.state.stationItems.length > 0) {
       return (
         <div>
           {this.state.stationItems.map((item) => {
             return (
               <Station
                 image={item.image}
                 name={item.name}
                 tagline={item.tagline}
                 backgroundColor={item.color}
                 audio={item.liveaudio.url} />
             )
           })}
         </div>
       )
     } else {
       return <div>Loading...</div>
     }
   }

}

export default App
