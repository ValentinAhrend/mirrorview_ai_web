import { celadon, honeydew, tea_green } from "../style/theme";

const TechnoCluster1 = () => {
    return <div class={"techno"}>
        <div class={"techno-tab"} style={{"position": "absolute", "top": "0px", "left": "0px", "display": "flex", "width": "50%", "height": "70%", "background": celadon}}>
            <div>
                <h1>{"Künstliche Intelligenz"}</h1>
                <span style={{"fontSize": "12px"}}>{"Die Klassifizierung von Fahrzeugen basiert auf fortschrittlicher, künstlicher Intelligenz. Diese eignet sich ideal für diese Aufgabe, da ein Datenmodell mit genug Training flexibel zwischen Objekten unterscheiden kann. Verschiedene KI-Tools stehen zur Auswahl, um eine möglichst effiziente Lösung zu ermöglichen."}</span>
            </div>
        </div>
        <div class={"techno-tab"} style={{"position": "absolute", "top": "0px", "right": "0px", "display": "flex", "width": "50%", "height": "30%", "background": celadon+"AA"}}>
            <div>
                <h1>{"Eigene Datenmodelle"}</h1>
                <span style={{"fontSize": "12px"}}>{"Um ein möglichst präzises und schnelles Ergebnis zu erhalten, besteht die Möglichkeit eigene Datenmodelle für entsprechende Videos aufzusetzen. Dies ist bei besonderer Qualität oder ungewöhnlichen Fahrzeugen sinnvoll."}</span>
            </div>
        </div>
        <div class={"techno-tab"} style={{"position": "absolute", "top": "30%", "right": "0px", "display": "flex", "width": "50%", "height": "40%", "background": celadon+"77"}}>
            <div>
                <h1>{"Multimodal LLMs"}</h1>
                <span style={{"fontSize": "12px"}}>{"Für maximale Präzision bei einer großen Datenmenge sind multi-modale LargeLanguageModels (wie ChatGPT) von Vorteil. Mit Billionen von Parametern sind diese Modelle höchst flexibel und können auch für den Menschen schwierig zu erkennende Objekte zuordnen."}</span>
            </div>
        </div>
        <div class={"techno-tab"} style={{"position": "absolute", "top": "70%", "right": "0px", "display": "flex", "width": "50%", "height": "30%", "background": tea_green+"FF"}}>
            <div>
                <h1>{"Modell-Cluster"}</h1>
                <span style={{"fontSize": "12px"}}>{"Die Verknüpfung verschiedener Modelle ist bei einer großen Anzahl an Fahrzeugklassen wichtig. So kann beispielsweise ein Bild in eine Kategorie sortiert, um dann genauer klassifiziert zu werden."}</span>
            </div>
        </div>
        <div class={"techno-tab"} style={{"position": "absolute", "top": "70%", "left": "0px", "display": "flex", "width": "50%", "height": "30%", "background": tea_green+"AA"}}>
            <div>
                <h1>{"Fine-Tuning"}</h1>
                <span style={{"fontSize": "12px"}}>{"Für scharfe und einfach strukturierte Verkehrsvideos reichen bereits bestehende Modelle (wie z.B. YOLOv8) für eine Klassifizierung aus. Diese können zudem für spezielle Situationen zugeschnitten werden (Fine-Tuning)."}</span>
            </div>
        </div>
    </div>
}
export default TechnoCluster1;