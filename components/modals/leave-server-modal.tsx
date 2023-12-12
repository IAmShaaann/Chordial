"use client";
import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal-store";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const LeaveServerModal = () => {
  const {  isOpen, onClose, type, data } = useModal();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const { server } = data;

  const isModalOpen = isOpen && type === "leaveServer";

  async function handleClick() {
    try {
      setLoading((previous) => !previous);
      await axios.patch(`/api/servers/${server?.id}/leave`);
      onClose();
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log("Error: LEAVE_SERVER", error);
    } finally {
      setLoading((previous) => !previous);
    }
  }

  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white text-black p-0 overflow-hidden">
          <DialogHeader className="pt-8 px-6">
            <DialogTitle className="text-2xl text-center font-semibold">
              Leave Server
            </DialogTitle>
          </DialogHeader>

          <DialogDescription className="text-center text-zinc-500">
            Are you sure you want to leave{" "}
            <span className="font-semibold text-indigo-500">
              {server?.name}
            </span>
            ?
          </DialogDescription>
          <DialogFooter className="bg-gray-100 px-6 py-4">
            <div className="flex items-center justify-between w-full">
              <Button disabled={loading} onClick={onClose} variant={"ghost"}>
                Cancel
              </Button>
              <Button
                disabled={loading}
                onClick={handleClick}
                variant={"primary"}
              >
                Confirm
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
