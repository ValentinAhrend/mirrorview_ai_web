import { amethyst, celadon, chrysler_blue, honeydew, tea_green } from "../style/theme";

const TechnoCluster2 = () => {
    return <div class={"techno"} style={{"color": "white"}}>
        <div class={"techno-tab"} style={{"position": "absolute", "top": "0px", "left": "0px", "display": "flex", "width": "60%", "height": "60%", "background": chrysler_blue}}>
            <div>
                <h1>{"Algorithmen"}</h1>
                <span style={{"fontSize": "12px"}}>{"Für die Verkehrsanalyse werden verschiedenste Algorithmen verwendet. Die Algorithmen basieren teilweise auf Variablen, die manuell zugeschnitten werden können oder sich automatisch adaptiv an das jeweilige Video anpassen."}</span>
            </div>
        </div>
        <div class={"techno-tab"} style={{"position": "absolute", "top": "0px", "right": "0px", "display": "flex", "width": "40%", "height": "60%", "background": chrysler_blue+"AA"}}>
            <div>
                <h1>{"Adaptionsverfahren"}</h1>
                <span style={{"fontSize": "12px"}}>{"Das Programm verfügt über eine räumliche Adaption und kann so Entfernungen einschätzen und die Genauigkeit anpassen. Komplexe Verkehrssituationen werden durch ein weiteres Verfahren vereinfacht und so möglichem Datenverlust (Überforderung des Systems) vorgebeugt."}</span>
            </div>
        </div>
        <div class={"techno-tab"} style={{"position": "absolute", "top": "60%", "right": "0px", "display": "flex", "width": "33.3333333333%", "height": "40%", "background": chrysler_blue+"77"}}>
            <div>
                <h1>{"Sensibles Tracking"}</h1>
                <span style={{"fontSize": "12px"}}>{"Ob Kurve oder Hindernis, die Tracking-Technologie schafft es, das Objekt auch bei ungenauen Ansichten zu verfolgen."}</span>
            </div>
        </div>
        <div class={"techno-tab"} style={{"position": "absolute", "top": "60%", "right": "33.3333333333%", "display": "flex", "width": "33.3333333333%", "height": "40%", "background": amethyst+"FF"}}>
            <div>
                <h1>{"Validationsverfahren"}</h1>
                <span style={{"fontSize": "12px"}}>{"Ein Algorithmus bewertet das gemessene Verhalten von Objekten und entscheidet, ob es sich um ein valides, zählbares Fahrzeug handelt."}</span>
            </div>
        </div>
        <div class={"techno-tab"} style={{"position": "absolute", "top": "60%", "left": "0px", "display": "flex", "width": "33.3333333333%", "height": "40%", "background": amethyst+"AA"}}>
            <div>
                <h1>{"Objekt-Simulation"}</h1>
                <span style={{"fontSize": "12px"}}>{"Das Verkehrsgeschehen wird parallel zum verschnellerten Video simuliert, um bessere Vorhersagen für die Bewegung von Objekten machen zu können."}</span>
            </div>
        </div>
    </div>
}
export default TechnoCluster2;