import { Button } from "components/ui/button";
import { Separator } from "components/ui/separator";

const Billboards = ({}) => {
  return (
    <div className="space-y-6 pr-64">
      <div className="grid grid-cols-2">
        <div>
            <h3 className="text-lg font-medium">Billboards</h3>
            <p className="text-sm text-muted-foreground">
            This is how your teamates will see you on the panel.
            </p>
        </div>
        <div className="flex justify-end items-end">
            <Button>Create New Billboard</Button>
        </div>
      </div>
      <Separator className="dark:bg-gray-700" />
  
    </div>
  );
};

export default Billboards;
