import "../styles.css";
import work from "../jsonData/workInfo.json";
import bag from "../images/work.png";

export default function Work() {
    return (
    <div>
        <div className="smallProfileContainer">
            <h2>Work Experience</h2>
            <img src={bag} className="workImg"/>
        </div>
        

        {
            work && work.map( edu => {
                return(
                    <div className="jsonBox" key={ edu.id }>
                        <strong>{ edu.title }</strong>
                        <br/>
                        { edu.content }
                    </div>
                )
            } )
        }
    </div>
    
    );
}