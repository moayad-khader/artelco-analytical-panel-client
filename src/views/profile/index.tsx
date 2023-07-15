import { Fragment } from "react";
import { ProfileForm } from "components/forms/profile.form";
import { IViewComponent } from "lib/types/view.types";


const Profile: IViewComponent = ({
    view,
    setView
}) => {

    return (
        <Fragment>
            <ProfileForm/>
        </Fragment>
    )
}


export default Profile;