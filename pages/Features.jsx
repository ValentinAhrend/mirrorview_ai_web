import { useState } from "react";
import ArrowDown from "../data/ad.svg";
import TechnoCluster1 from "../layout/TechnoCluster1";
import TechnoCluster2 from "../layout/TechnoCluster2";
import { amethyst } from "../style/theme";
const Data = ({selected}) => {
    if(selected == 0) {
        return <div className={"features"} style={{"fontFamily": "Arial"}}>
            <div style={{"display": "flex", "paddingBottom": "60px", "gap": "12px", "flexDirection": "column", "width": "100%", "position": "relative", "alignItems": "stretch"}}>
            <div className={"feature-box"} style={{"background": "linear-gradient(99deg, #5603AD 3.78%, #8367C7 96.43%)"}}>
                <div style={{"color": "white", "fontSize": "20px", "fontWeight": "500"}}>
                    {"Detektion / Tracking"}
                </div>
                <div style={{"color": "white", "fontSize": "14px", "marginTop": "3px"}}>
                    <span><span>{"Über ein spezielles "}</span><span style={{"textDecoration": "underline", "cursor": "pointer"}} onClick={()=>{

                    }}>{"Annäherungsverfahren"}</span><span>{" werden kleine sowie große Objekte verfolgt. Dabei hinterlässt jedes Fahrzeug eine Spur, die weiter analysiert wird."}</span></span>
                </div>
            </div>
            <div className={"feature-box"} style={{"background": "linear-gradient(277deg, #B3E9C7 -1.92%, #F0FFF1 98.35%)"}}>
                <div style={{"color": "black", "fontSize": "20px", "fontWeight": "500"}}>
                    {"Klassifizierung"}
                </div>
                <div style={{"color": "black", "fontSize": "14px", "marginTop": "3px"}}>
                    <span>{"Mit "}</span><span style={{"textDecoration": "underline", "cursor": "pointer"}}>{"künstlicher Intelligenz und Datenmodellen"}</span><span>{" werden gefundene Objekte "}<span style={{"textDecoration": "underline", "cursor": "pointer"}} onClick={()=>{

                    }}>{"Fahrzeugklassen"}</span><span>{" zugeordnet."}</span></span>
                </div>
            </div>
            <div style={{"zIndex":"-1", "position": "absolute", "top": "12px", "left": "50%", "transform": "translateX(-50%)", "height": "100%", "animationName": "topFadeIn2", "animationDuration": "1s"}}>
                <img height={"100%"} src={ArrowDown}></img>
            </div>
            </div>
            <div className={"feature-box"} style={{"background": "linear-gradient(99deg, #F4F4F4 3.78%, #CCC 96.43%)"}}>
                <div style={{"color": "black", "fontSize": "20px", "fontWeight": "500"}}>
                    {"Objekt Zählung"}
                </div>
                <div style={{"color": "black", "fontSize": "14px", "marginTop": "3px"}}>
                    <span>{"Die Detektion und Klassifizierung ermöglicht mit einem Validierungsverfahren die Zählung von Verkehr in einem Video."}</span>
                </div>
            </div>
            <p style={{"fontSize": "24px", "fontWeight": "500"}}>{"Weitere Features"}</p>
            <div style={{"position": "relative", "marginLeft": "4px", "marginBottom": "40px"}}>
                <div style={{"position": "absolute", "height": "100%", "top": "-16px", "width": "2px", "background": "lightgray"}}></div>
                <div style={{"marginTop":"0px","position":"relative", "marginLeft": "12px", "display": "flex", "gap": "4px", "flexDirection": "column", "overflow": "visible"}} >
                    <div style={{"position": "absolute", "left": "-16px", "top": "4px", "width": "10px", "height": "10px", "borderRadius": "100%", "background": "lightgray"}}></div>
                    <div style={{"fontSize": "18px", "color": "black"}}>
                        {"User Interface / Benutzeroberfläche"}
                    </div>
                    <div style={{"fontSize": "14px"}}>{"Das Programm verfügt über eine Web gestütze Benutzeroberfläche, mit der alle Prozesse, Analysen gesteuert, Resultate angesehen und Daten gedownloaded werden können."}</div>
                </div>
                <div style={{"marginTop":"24px","position":"relative", "marginLeft": "12px", "display": "flex", "gap": "4px", "flexDirection": "column", "overflow": "visible"}} >
                    <div style={{"position": "absolute", "left": "-16px", "top": "4px", "width": "10px", "height": "10px", "borderRadius": "100%", "background": "lightgray"}}></div>
                    <div style={{"fontSize": "18px", "color": "black"}}>
                        {"Datenbank"}
                    </div>
                    <div style={{"fontSize": "14px"}}>{"Objekt-Vektoren, Prozesse und Resultate werden in einer beliebigen, skalierbaren Datenbank verwaltet."}</div>
                </div>
                <div style={{"marginTop":"24px","position":"relative", "marginLeft": "12px", "display": "flex", "gap": "4px", "flexDirection": "column", "overflow": "visible"}} >
                    <div style={{"position": "absolute", "left": "-16px", "top": "4px", "width": "10px", "height": "10px", "borderRadius": "100%", "background": "lightgray"}}></div>
                    <div style={{"fontSize": "18px", "color": "black"}}>
                        {"API-Integration (Clustering)"}
                    </div>
                    <div style={{"fontSize": "14px"}}>{"Neben dem Web-Interface kann auch eine API für das Benutzen des Programmes verwendet werden. Es gibt auch die Möglichkeit, ein Cluster aus Computern für schnelleres Arbeiten zu nutzen."}</div>
                </div>
                <div style={{"marginTop":"24px","position":"relative", "marginLeft": "12px", "display": "flex", "gap": "4px", "flexDirection": "column", "overflow": "visible"}} >
                    <div style={{"position": "absolute", "left": "-16px", "top": "4px", "width": "10px", "height": "10px", "borderRadius": "100%", "background": "lightgray"}}></div>
                    <div style={{"fontSize": "18px", "color": "black"}}>
                        {"Learning by Doing"}
                    </div>
                    <div style={{"fontSize": "14px"}}>{"Umso mehr Videos analysiert werden und umso mehr Objektdaten entstehen, desto besser können die Datenmodelle an die Analysen angepasst werden. Die Modelle können manuell stetig weiterentwickelt werden."}</div>
                </div>
                <div style={{"marginTop":"24px","position":"relative", "marginLeft": "12px", "display": "flex", "gap": "4px", "flexDirection": "column", "overflow": "visible"}} >
                    <div style={{"position": "absolute", "left": "-16px", "top": "4px", "width": "10px", "height": "10px", "borderRadius": "100%", "background": "lightgray"}}></div>
                    <div style={{"fontSize": "18px", "color": "black"}}>
                        {"Ergebnisansicht"}
                    </div>
                    <div style={{"fontSize": "14px"}}>{"Das Programm bietet einen genauen Einblick in die Resultate der Analyse, erstellt Diagramme und Tabellen."}</div>
                </div>
                <div style={{"marginTop":"24px","position":"relative", "marginLeft": "12px", "display": "flex", "gap": "4px", "flexDirection": "column", "overflow": "visible"}} >
                    <div style={{"position": "absolute", "left": "-16px", "top": "4px", "width": "10px", "height": "10px", "borderRadius": "100%", "background": "lightgray"}}></div>
                    <div style={{"fontSize": "18px", "color": "black"}}>
                        {"Analyse vor Ort"}
                    </div>
                    <div style={{"fontSize": "14px"}}>{"Die Prozesse laufen auf einem Computer vor Ort. Datensicherheit kann so gewährleistet werden. "}</div>
                </div>
            </div>
        </div>

    }
    if(selected == 1) {
        return <div style={{"display": "flex", "flexDirection": "column", "gap": "40px", "marginBottom": "120px"}}>
            <TechnoCluster1></TechnoCluster1>
            <TechnoCluster2></TechnoCluster2>
            <div style={{"fontFamily":"Arial"}}>
                <h1>Weitere Informationen</h1>
                    <div style={{"display": "flex", "gap": "12px", "alignItems": "start"}}>
                        <div style={{"color":"gray", "fontSize": "18px"}}>{">"}</div>
                        <div style={{"display": "flex", "gap": "4px", "flexDirection": "column"}}>
                        
                        <div style={{"fontSize": "18px"}}>{"Fahrzeugklassen"}</div>
                        <div style={{"fontSize": "14px"}}>
                            <span>{"Im Normalfall wird zwischen "}</span><span style={{"fontWeight": "bold"}}>{"7 Klassen"}</span><span>{" unterschieden: Fahrrad, Krad, Pkw, Lieferfahrzeug, Bus, Lkw, Lastzug inkl. Sattelzug. Diese Klassen können "}</span><span style={{"fontWeight": "bold"}}>{"je nach Bedarf"}</span><span>{" angepasst werden. Umso mehr Klassen es gibt, desto schwerer fällt es einer künstlichen Intelligenz diese exakt zuzuordnen. Daher ist die Empfehlung zwischen möglichst wenig Klassen bzw. sich stark unterscheidenden Klassen zu differenzieren."}</span></div>
                        </div>
                    </div>
                    <div style={{"display": "flex", "gap": "12px", "alignItems": "start", "marginTop": "18px"}}>
                        <div style={{"color":"gray", "fontSize": "18px"}}>{">"}</div>
                        <div style={{"display": "flex", "gap": "4px", "flexDirection": "column"}}>
                        
                        <div style={{"fontSize": "18px"}}>{"Datensicherheit"}</div>
                        <div style={{"fontSize": "14px"}}>
                            <span>{"Die eigenentwickelten Algorithmen und das Programm an sich laufen auf Ihren Computern und erfordern im Normalfall keine Internetverbindung. Eine Weiterleitung der Daten ist daher nicht möglich."}</span><br></br><span>{"Je nach Videoqualität und Verkehrsart müssen verschiedne KI-Modelle verwendet werden. Bei der Verwendung von multi-modalen LargeLanguageModels ist nur dann eine Verbindung zu einem Server wirklich sinnvoll, wenn die lokale Grafikkarte nicht ausreicht bzw. für eine zeitintensive Analyse sorgt. "}</span><br></br><span>{"In diesem Fall würden nur Bildauschnitte verschlüsselt an einen Server mit geeigneter Grafikkarte geschickt werden (nicht kostenlos)."}</span></div>
                        </div>
                    </div>
                    <div style={{"display": "flex", "gap": "12px", "alignItems": "start", "marginTop": "18px"}}>
                        <div style={{"color":"gray", "fontSize": "18px"}}>{">"}</div>
                        <div style={{"display": "flex", "gap": "4px", "flexDirection": "column"}}>
                        
                        <div style={{"fontSize": "18px"}}>{"Weiterentwicklung von Datenmodellen"}</div>
                        <div style={{"fontSize": "14px"}}>
                            <span style={{"fontWeight": "bold"}}>{"Je nach Belieben"}</span><span>{" können Bilddaten an das Developer-Team geschickt werden, um so Datenmodelle mit möglichst viel Bildmaterial zu trainieren. Diese Datenmodelle ständen in keinem rechtlichen Zusammenhang mit dem Ursprung der Trainingsbilder. Es wäre wünschenswert die Bilder weiterzuschicken, da die Varianz an Videos die "}</span><span style={{"fontWeight": "bold"}}>{"Genauigkeit der Datenmodelle"}</span><span>{" immer weiter verbessert."}</span></div>
                        </div>
                    </div>
                </div>
        </div>
    }
    if(selected == 2) {
        return <div style={{"display": "flex", "flexDirection": "column", "gap": "12px", "fontFamily": "Arial"}}>
            <div><span>{"TrafficInspector ist ein Programm, das eine umfassende Integration benötigt. Diese Integration besteht u.a. in der Einstellung von Drivern, Verbindung zu einer Datenbank oder Aufbereitung eines Clusters an Computern."}</span></div>
            <table>
                <tbody>
                    {[["Betriebsysteme", "Windows oder Linux"], ["Grafikkarte", "NVIDIA erforderlich*"], ["Driver", "Cuda erforderlich*"], ["CPU", "Leistungsstark mit hohem Takt (>=3GHZ)"], ["RAM", "Für die Videoanayse ist ausreichend RAM erforderlich (>=12GB)"]].map((element)=>{
                        return <tr>
                            <td>{element[0]}</td>
                            <td>{element[1]}</td>
                        </tr>
                    })}
                    
                </tbody>
            </table>
            <div><span style={{"fontSize": "12px"}}>{"* auch andere Grafikkarten und Driver können im Allgemeinen genutzt werden. Geforce wird präferiert."}</span></div>
        </div>
    }
}


function Features(params) {
    const [selected, setSelected] = useState(0);
    return <div style={{"display": "flex", "height": "calc(100vh - 68px)","margin": "0px clamp(10px, 5vw, 80px)"}}>
        <div className="sidedesk">
            <div>
                {["Features", "Technologie","System Anforderungen"].map((element, x)=>{
                    return  <div onClick={()=>{
                        setSelected(x);
                    }} style={{"color": selected == x ? "black" : "gray"}} className="sidelink">{element}</div>
                })}
            </div>
        </div>
        <div className="maindesk">
            <h1>{["Features", "Technologie","System Anforderungen"][selected]}</h1>
            <Data selected={selected}></Data>
        </div>
    </div>
}
export default Features;