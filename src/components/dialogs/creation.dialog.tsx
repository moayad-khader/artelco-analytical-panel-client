import { Button } from "components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/ui/dialog";
import { FC } from "react";
import { Icons } from "components/icons";
import { cn } from "lib/utils";
import { Separator } from "components/ui/separator";

interface Props {
  title: string;
  desciption?: string;
  buttonText: string;
  children: any;
  className?: string;
}

const CreationDialog: FC<Props> = ({
  children,
  buttonText,
  title,
  desciption,
  className,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icons.addCircle />
          <span className="ml-2">{buttonText}</span>
        </Button>
      </DialogTrigger>
      <DialogContent
        className={cn("sm:max-w-[425px]", className ? className : "")}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{desciption}</DialogDescription>
        </DialogHeader>
        <Separator/>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CreationDialog;
