import { redirect } from "next/navigation";
import { NavBar } from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";

const Subscription = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return <NavBar />;
};

export default Subscription;
