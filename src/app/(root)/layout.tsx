import type { Metadata } from "next";
import { APP_DESCRIPTION } from "../../../constants";
import Header from "../../components/header";
import Footer from "./Products/footer";

export const metadata: Metadata = {
  title: "Home",
  description: APP_DESCRIPTION  ,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="flex flex-col h-screen">
    <Header />
    <main className="flex-1 wrapper"> {children}</main>
    <Footer />
   </div>
  );
}
