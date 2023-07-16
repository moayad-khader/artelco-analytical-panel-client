import { ProfileForm } from "components/forms/profile.form";
import { IViewComponent } from "lib/types/view.types";
import { Separator } from "components/ui/sperator";

const Profile: IViewComponent = ({
    view,
    setView
}) => {

    return (
        <div className="space-y-6 pr-64">
        <div>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-muted-foreground">
            This is how your teamates will see you on the panel.
          </p>
        </div>
        <Separator className="dark:bg-gray-700"/>
        <ProfileForm />
      </div>
    )
}


export default Profile;