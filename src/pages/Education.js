import "../styles.css";
import education from "../jsonData/educationInfo.json";
import hat from "../images/Education.png";

export default function Education() {
    return (
    <div>
        <div className="smallProfileContainer" >
            <h2>Education</h2>
            <img src={hat} className="educationImg"/>
        </div>


        {
            education && education.map( edu => {
                return(
                    <div className="jsonBox" key={ edu.id }>
                        <strong>{ edu.title }</strong>
                        <br></br>
                        { edu.content }
                    </div>
                )
            } )
        }
    </div>
    
    );
}