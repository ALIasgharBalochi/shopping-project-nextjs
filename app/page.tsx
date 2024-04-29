import Banner from "@/components/banner/Banner";
import Body from "@/components/Body/Body";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navBarComponents/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Body />
      <Footer />
    </div>
  );
}
