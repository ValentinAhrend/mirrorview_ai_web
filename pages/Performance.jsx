import { useState } from "react";
import ArrowDown from "../data/ad.svg";
import TechnoCluster1 from "../layout/TechnoCluster1";
import TechnoCluster2 from "../layout/TechnoCluster2";
import { amethyst } from "../style/theme";
import One from "../data/one.svg";
import Two from "../data/two.svg";
import Three from "../data/three.svg";
import Four from "../data/four.svg";
import Arrows2 from "../data/arrows2.svg";


const Data = ({selected}) => {
    if(selected == 1) {
        return <div className={"features"} style={{"fontFamily": "Arial"}}>
            <div><span>{"Die Performance hängt von der Videoqualität, der Komplexität des Knotens und den getroffenen Videoeinstellungen ab."}</span></div>
            <div className={"feature-box"} style={{"background": "linear-gradient(99deg, #5603AD 3.78%, #8367C7 96.43%)"}}>
                <div style={{"color": "white", "fontSize": "20px", "fontWeight": "500"}}>
                    {"Teste TrafficInspector kostenlos"}
                </div>
                <div style={{"color": "white", "fontSize": "14px", "marginTop": "3px"}}>
                    <span><span>{"Unser Developer-Team wird das Video mit geeigneter Hardware und präzisen Videoeinstellungen von TrafficInspector analysieren lassen und anschließend Ihnen das Resultat zuschicken."}</span></span>
                </div>
                <div style={{"display": "flex", "flexDirection": "column", "marginTop": "12px", "marginLeft": "5%", "gap": "8px"}}>
                    <div style={{"display": "flex", "gap": "20px", "alignItems": "center"}}>
                        <img src={One} width={"36px"} ></img>
                        <div><span style={{"color": "white"}}><span>{"Schicke eine Anfrage an "}</span><span style={{"textDecoration": "underline", "cursor": "pointer"}} onClick={()=>{
                            window.open("mailto:valentinahrend@gmail.com?subject=Anfrage%3A%20Performance%20Test%20TrafficInspector%20mit%20Video", "_blank");
                        }}>{"valentinahrend@gmail.com"}</span></span></div>
                    </div>
                    <div style={{"display": "flex", "gap": "20px", "alignItems": "center"}}>
                        <img src={Two} width={"36px"} ></img>
                        <div><span style={{"color": "white"}}><span>{"Übermittlung einer Videodatei zur Analyse"}</span></span></div>
                    </div>
                    <div style={{"display": "flex", "gap": "20px", "alignItems": "center"}}>
                        <img src={Three} width={"36px"} ></img>
                        <div><span style={{"color": "white"}}><span>{"Analyse mit besten Einstellungen und bester Hardware"}</span></span></div>
                    </div>
                    <div style={{"display": "flex", "gap": "20px", "alignItems": "center"}}>
                        <img src={Four} width={"36px"} ></img>
                        <div><span style={{"color": "white"}}><span>{"Präzise Resultate und Performance Vergleich"}</span></span></div>
                    </div>
                </div>
            </div>
        </div>  

    }
    if(selected == 0) {
        return <div style={{"display": "flex", "flexDirection": "column", "gap": "40px", "marginBottom": "120px", "fontFamily": "Arial"}}>
            <div style={{"fontSize": "16px"}}>{"Die dargestellten Werte wurden in verschiedensten Analysen gemessen und manuell überprüft."}</div>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "40px", "position": "relative"}}>
            <div className={"content-box"}>
                <div style={{"display": "flex", "marginBottom": "0px", "marginTop": "4px", "justifyContent": "space-between"}}>
                <div style={{"fontSize": "22px", "fontWeight": "500"}}>{"Genauigkeit der Objekt Zählung"}</div>
                <div style={{"fontSize": "22px", "fontWeight": "500"}}>{"85-99%"}</div>

                </div>
            <div className="bar-c">
                <div className="bar-min"></div>
                <div className="bar-max"></div>
            </div>
            <div style={{"fontSize": "13px"}}>{"Je nach Komplexität, Videoauflösung, Lichtverhältnis und Einstellungen können Fehler bei der Zählung entstehen."}</div>

            </div>
            <div className={"content-area"}>
            <div className={"content-box2"}>
                <div className={"banner"}></div>
                <div className={"box-header"}>
                    {"Querschnitte von Straßen, einfache Kreuzungen, Schnellstraße"}
                </div>
                <div className={"box-des"}>
                    {"In diesen Situationen erreicht die Objekt-Zählung die maximale Genauigkeit. "}
                </div>
            </div>
            <div className={"content-box2"}>
                <div className={"banner"} style={{"backgroundColor": "orange"}}></div>
                <div className={"box-header"}>
                    {"Große Kreuzungen, Straße mit Hindernissen, Dämmerung"}
                </div>
                <div className={"box-des"}>
                    {"Das Programm versucht mit Algorithmen auch hier maximale Performance bei der Objekt-Zählung zu erlangen. Das Programm kann sich nicht an jede Situation perfekt anpassen. Das kann zu geringerer Genauigkeit führen."}
                </div>
            </div>
            <div className={"content-box2"}>
                <div className={"banner"} style={{"backgroundColor": "gray"}}></div>
                <div className={"box-header"}>
                    {"Kreisverkehr, Straßen und Kreuzungen bei Dunkelheit"}
                </div>
                <div className={"box-des"}>
                    {"Diese Szenarien sind noch nicht zählbar. In Zukunft wird es vorraussichtlich Verbesserungen und Anpassungen hierzu geben."}
                </div>
            </div>
            </div>
            </div>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "40px", "marginTop": "0px", "position": "relative"}}>
            <img style={{"position": "absolute", "width": "80%", "top": "-75px", "left": "10%", "visibility": window.innerWidth < 1014 || window.innerWidth > 1750 ? "hidden": "visible", "zIndex": "-1"}} src={Arrows2}></img>            
            <div className={"content-box"} style={{"marginTop": "100px"}}>
                <div style={{"display": "flex", "marginBottom": "0px", "marginTop": "4px", "justifyContent": "space-between"}}>
                <div style={{"fontSize": "22px", "fontWeight": "500"}}>{"Genauigkeit der Objekt Klassifizierung"}</div>
                <div style={{"fontSize": "22px", "fontWeight": "500"}}>{"98%"}</div>

                </div>
            <div className="bar-c">
                <div className="bar-max2"></div>
            </div>
            <div style={{"fontSize": "13px"}}>{"Die Genauigkeit der Klassifizierung hängt von der verwendeten Methode ab. Im Allgemeinen schneiden LLMs am besten ab."}</div>

            </div>
            </div>
        </div>
    }
}


function Performance(params) {
    const [selected, setSelected] = useState(0);
    return <div style={{"display": "flex", "height": "calc(100vh - 68px)","margin": "0px clamp(10px, 5vw, 80px)"}}>
        <div className="sidedesk">
            <div>
                {["Performance", "Test"].map((element, x)=>{
                    return  <div onClick={()=>{
                        setSelected(x);
                    }} style={{"color": selected == x ? "black" : "gray"}} className="sidelink">{element}</div>
                })}
            </div>
        </div>
        <div className="maindesk">
            <h1>{["Performance", "Test"][selected]}</h1>
            <Data selected={selected}></Data>
        </div>
    </div>
}
export default Performance;