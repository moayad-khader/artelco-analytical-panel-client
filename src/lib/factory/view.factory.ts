import HomeView from "views/home";
import SettingsView from "views/settings";
import { IViewComponent } from "lib/types/view.types";


class View {

    view: IViewComponent;

    constructor() {}

    getView():IViewComponent{
        return this.view;
    }
}


class Home extends View {
    constructor() {
        super();
        this.view = HomeView;
    }

}

class Settings extends View {
    constructor() {
        super();
        this.view = SettingsView;
    }
}

class ViewFactory {
    static createView(view: string): View {
        switch (view) {
            case "home":
                return new Home();
            case "settings":
                return new Settings();
        }
    }
}


export default ViewFactory;
