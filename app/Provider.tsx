"use client";
import Loader from "@/components/Loader";
import { getClerkUsers } from "@/lib/actions/user.actions";
import {
  LiveblocksProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    // <LiveblocksProvider publicApiKey={"pk_dev_FMrf94_VHLlzSVd787ZKtFmOOyMuB2ZPJa_kkHa3IPWKElEWtoScvSw4ZqC8LW5K"}>
    <LiveblocksProvider 
    authEndpoint={"/api/liveblocks-auth"}
    resolveUsers={async ({userIds})=>{
      const users = await getClerkUsers({userIds});
      return users;
    }}
    >
      
      {/* <RoomProvider id="my-room"> */}
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
      {/* </RoomProvider> */}
    </LiveblocksProvider>
  );
};

export default Provider;
