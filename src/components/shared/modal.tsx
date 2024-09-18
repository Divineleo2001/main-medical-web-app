"use client"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Modal({
  title,
  open,
  setOpen,
  children,
  className,
}: {
  className?: string;
  title?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className={`${className}`}>
        <DialogHeader className="px-5 pt-5">
          <DialogTitle>{title ?? "Modal"}</DialogTitle>
        </DialogHeader>
        <div className={`px-5 pb-5 ${className}`}>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
