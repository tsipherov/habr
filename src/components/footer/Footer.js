import React from 'react'
import './footer.css'

class Footer extends React.Component {

    

    render() {
        
        
        const date = new Date(),
        hours = date.getHours()
        let timeOfDay
        
        const styles = {
            // padding: "20px 0",
            fontSize: 24
        }
        
        if(hours <= 12){
            timeOfDay = "morning"
            styles.color = "#04756F"
        } else if (hours > 12 && hours < 18 ){
            timeOfDay = "day"
            styles.color = "tomato"
        } else {
            timeOfDay = "evening"
            styles.color = "whitesmoke"
        }
        return (
            <div className="myFooter">
            <h4 style={styles}>Hello, good {timeOfDay}!</h4>
            </div>
            )
            
        }
}

export default Footer
