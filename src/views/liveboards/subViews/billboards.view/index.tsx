import { Button } from "components/ui/button";
import { Separator } from "components/ui/separator";
import { Icons } from "components/icons";
import { DataTable } from "components/tables/data.table";
import { columns } from "views/liveboards/subViews/billboards.view/columns";
import billboardsMockData from "_mock/billboards";

const Billboards = ({}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2">
        <div>
            <h3 className="text-lg font-medium">Billboards</h3>
            <p className="text-sm text-muted-foreground">
            This is how your teamates will see you on the panel.
            </p>
        </div>
        <div className="flex justify-end items-end">
            <Button>
              <Icons.addCircle/>
              <span className="ml-2">
                Create Billboard
              </span>
            </Button>
        </div>
      </div>
      <Separator className="dark:bg-gray-700" />
      <DataTable data={billboardsMockData} columns={columns} />
    </div>
  );
};

export default Billboards;
