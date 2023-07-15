import HomeView from "views/home";
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


class ViewFactory {
    static createView(view: string): View {
        switch (view) {
            case "home":
                return new Home();
        }
    }
}


export default ViewFactory;
