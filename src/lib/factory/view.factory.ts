import HomeView from "views/home";
import SettingsView from "views/settings";
import ProfileView from "views/settings/subViews/profile";
import OrganizationView from "views/settings/subViews/organization";
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


class Profile extends View {
    constructor() {
        super();
        this.view = ProfileView;
    }
}

class Organization extends View {
    constructor() {
        super();
        this.view = OrganizationView;
    }
}

class Dashboards extends View {
    constructor() {
        super();
        this.view = OrganizationView;
    }
}

class ViewFactory {
    static createView(view: string): View {
        switch (view) {
            case "home":
                return new Home();
            case "settings":
                return new Settings();
            case "profile":
                return new Profile();
            case "organization":
                return new Organization();
        }
    }
}


export default ViewFactory;
