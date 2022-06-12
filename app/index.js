import MVC from "../Dependencies/MVC-JS/MVC.js";
import Router from "../Dependencies/MVC-JS/Router.js";
import Render from "../Dependencies/ReqJS/Render.js";
import Format from "../Controllers/format.js";
import Minify from "../Controllers/minify.js";

const app = new MVC("app-container");
export const router = new Router(app);
export const routes = {
    "home": "home"
}
const AppUI = new Worker("../Workers/App.js", { type: "module" });

app.addView({
    name: "home",
    model: {},
    view(model) {
        AppUI.addEventListener("message", msg => {
            Render("app-container", msg.data.app, {
                datatype: "text",
                id: 0,
                resolve: (res) => {
                    Format();
                    Minify();
                }
            }, true);
        });
    },
    controller(model) {

    }
});

router.get("home", routes["home"]);