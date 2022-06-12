import UI from "../Dependencies/UI-JS/UI.js";

const app = new UI("<textarea class='input_area input_area--input' placeholder='Enter your JSON here...'></textarea><div class='controls'><center><button type='button' class='control--btn format'>Format JSON</button><button type='button' class='control--btn minify'>Minify JSON</button></center></div><textarea class='input_area input_area--output' placeholder='Your JSON will appear here...'></textarea></div>", { type: "text/html" });

const appUI = {
    "app": app.file
}

postMessage(appUI);