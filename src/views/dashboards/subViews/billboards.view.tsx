import { Fragment } from "react";
import { Button } from "components/ui/button";
import { IViewComponent } from "lib/types/view.types";
import { Icons } from "components/icons";

const Billboards: IViewComponent = ({

}) => {

    return (
        <Fragment>
            <div className="p-5 flex flex-wrap justify-between items-center border-b ">
                <div className=" flex flex-col gap-3">
                    <h1 className="text-white text-2xl font-bold capitalize">
                        Billboards
                    </h1>
                    <p className="capitalize">Start your journey here!</p>
                </div>
                <Button variant="outline" className="rounded-none">
                <Icons.addCircle/>
                    Create Billboard
                </Button>
            </div>
            <div className="w-full grid grid-cols-2 gap-2">
                
            </div>
        </Fragment>
    )
}


export default Billboards;