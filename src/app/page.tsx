import Hero from "@/components/Hero";
import FloatingNavbar from "@/components/ui/FloatingNavbar";
import { navItems } from "@/constant";

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
      </div>
    </main>
  );
}

export default Home;