import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
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
        flex items-center justify-center flex-col overflow-clip
        
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
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

export default Home;