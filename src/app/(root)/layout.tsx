import type { Metadata } from "next";
import { APP_DESCRIPTION } from "../../../constants";
import Header from "../../components/shared/header";
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
   <div className="flex flex-col h-screen w-full">
    <Header />
    <main className="wrapper"> {children}</main>
    <Footer />
   </div>
  );
}
