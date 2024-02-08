import { IEventForm } from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";

export async function onEventSubmit() {

  const {sessionClaims} = auth()
    const userId = sessionClaims?.userId as string
    if (!userId) {
      throw new Error("Unauthorized")
    }
    console.log(FormData);

  }

