import "./Home.css";
import image from "../images/chad.jpg"
import person from "../images/person-icon.png"
import change from "../components/ChangeBackground";
import EasterEgg from "../components/1337EasterEgg";

export default function Home() {
    return (
        <div className="homeContainer">
            <div className="profileContainer" id="test">
                <h2>Felix Widell <br/><br/> .NET Fullstack Developer</h2>
                <img className="profilePic" src={image}></img>
            </div>
            <div className="homeAboutFlexBox">
            <div className="homeAboutMeContainer">
                    <h2>Om mig</h2>
                    <img src={person}/>
                </div>
                <a>Är 22 år nybliven .Net Fullstack developer som är intresserad i Game development och Musik DAWs / VSTs.
Har stort intresse för vad som går in i utvecklingen av det och hur det fungerar dels att sverige släpper bland dom bästa spelen.
Lär mig snabbt nya saker och tar gärna på mig utmaningar, har fått erfarenhet av diverse olika programmeringspråk och frameworks
genom mina utbildningar och är redo att lägga det till användning. </a>
            </div>
            <button onClick={change} className="changeButton">Change</button>
            <EasterEgg/>
        </div>


);
}