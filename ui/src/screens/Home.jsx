import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <>
        <Navbar />
        <section className="flex flex-col min-h-screen">
        
        <main className="flex-1 p-3">
            <h1 className="text-2xl font-bold mb-4">Home Page</h1>
            <p>This is your blog home content.</p>
        </main>
        
        </section>
        <Footer/>
    </>
  );
};
