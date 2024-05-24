import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import FloatingNavbar from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

const Home = () => {
  return (
    <main
      className="
        relative 
        dark:bg-black-100 bg-white
        flex items-center justify-center flex-col 
        overflow-hidden 
        mx-auto 
        sm:px-10 px-5
      "
    >
      <div 
        className="max-x-7xl w-full"
      >
        <FloatingNavbar 
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
      </div>
    </main>
  );
}

export default Home;