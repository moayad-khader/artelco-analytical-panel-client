import { OrgnaizationForm } from "components/forms/organization.form";
import { IViewComponent } from "lib/types/view.types";
import { Separator } from "components/ui/sperator";

const Organization = ({}) => {
  return (
    <div className="space-y-6 pr-64">
      <div>
        <h3 className="text-lg font-medium">Organization</h3>
        <p className="text-sm text-muted-foreground">
          Manage your teamates and add new ones.
        </p>
      </div>
      <Separator className="dark:bg-gray-700" />
      <OrgnaizationForm />
    </div>
  );
};

export default Organization;
