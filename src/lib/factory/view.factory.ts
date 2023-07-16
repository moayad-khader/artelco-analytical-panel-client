import HomeView from "views/home";
import ProfileView from "views/profile";
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

class Profile extends View {
    constructor() {
        super();
        this.view = ProfileView;
    }
}

class ViewFactory {
    static createView(view: string): View {
        switch (view) {
            case "home":
                return new Home();
            case "profile":
                return new Profile();
        }
    }
}


export default ViewFactory;
