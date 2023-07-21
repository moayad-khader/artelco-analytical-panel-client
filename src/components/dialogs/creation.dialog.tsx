import { Button } from "components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/ui/dialog"
import { FC } from "react"
import { Input } from "components/ui/input"
import { Label } from "components/ui/label"

interface Props{
  title: string,
  desciption: string,
  buttonText: string,
  children: any
}

const CreationDialog: FC<Props> = ({
  children,
  buttonText,
  title,
  desciption
})  => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {desciption}
          </DialogDescription>
        </DialogHeader>
       {children}
      </DialogContent>
    </Dialog>
  )
}

export default CreationDialog;