import { FC, Fragment } from "react";
import ModuleCard from "components/cards/module.card";
import {
    Icons
} from "components/icons";
import { Button } from "components/ui/button";

interface Props {

}

const Profile: FC<Props> = ({

}) => {

    return (
        <Fragment>
            <div className="p-5 flex flex-wrap justify-between items-center border-b border-light dark:border-primary mb-6">
                <div className=" flex flex-col gap-3">
                    <h1 className="text-white text-4xl font-bold capitalize">
                        Welcome Moayad Khader!
                    </h1>
                    <p className="capitalize">Start your journey here!</p>
                </div>
                <Button variant="outline">
                    <Icons.message className="mr-2 h-4 w-4" />
                    Leave Your Feedback
                </Button>
            </div>
            <div className="w-full grid grid-cols-2 gap-2">
                <ModuleCard
                    title="Dashboard"
                    Icon={Icons.pie}
                />
                <ModuleCard
                    title="Reports"
                    Icon={Icons.chart}
                />
                <ModuleCard
                    title="Billing"
                    Icon={Icons.billing}
                />
            </div>
        </Fragment>
    )
}


export default Profile;