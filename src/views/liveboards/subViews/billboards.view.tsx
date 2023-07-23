import { Button } from "components/ui/button";
import { Separator } from "components/ui/separator";
import { Icons } from "components/icons";
import { DataTable } from "components/tables/data.table";
import { columns } from "components/columns/billboards.column";
import CreationDialog from "components/dialogs/creation.dialog";
import billboardsMockData from "_mock/billboards";
import { BillboardForm } from "components/forms/billboard.form";

const Billboards = ({}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2">
        <div>
            <h3 className="text-lg font-medium">Billboards</h3>
            <p className="text-sm text-muted-foreground">
             Billboards are striking, larger-than-life advertising structures that captivate with bold visuals and powerful messaging, dominating the urban landscape and leaving a lasting impression on passersby.
            </p>
        </div>
        <div className="flex justify-end items-end">
          <CreationDialog
            title="Create Billboard"
            buttonText="Create Billboard"
            className="sm:max-w-5xl"
          >
            <BillboardForm/>
          </CreationDialog> 
        </div>
      </div>
      <Separator className="dark:bg-gray-700" />
      <DataTable data={billboardsMockData} columns={columns} />
    </div>
  );
};

export default Billboards;
