import Image from "next/image";
import Footer from "./Products/footer";
import Header from "./Products/header";

export default function Home() {
  return (
    <div className="w-full  h-screen flex flex-col items-center justify-center">
      <Header />
     <h1 className="text-4xl h-screen">Hi, this is the main page</h1>
     <Footer />
    </div>
  );
}
