"use client";
import { InviteModal } from "@/components/modals/invite-modal";
import { MembersModal } from "@/components/modals/members-modal";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { LeaveServerModal } from "@/components/modals/leave-server-modal";
import { CreateChannelModal } from "@/components/modals/create-channel-modal";
import { DeleteServerModal } from "@/components/modals/delete-server-modal";

import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return "";
  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <LeaveServerModal />
      <CreateChannelModal />
      <DeleteServerModal />
    </>
  );
};
