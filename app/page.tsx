import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import HomeDashboard from "./(home)/page";
const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return <HomeDashboard />;
};

export default Home;
