import Image from "next/image";
import Footer from "./Products/footer";
import Header from "../../components/header";
import Hero from "@/components/hero";
import ProductList from "@/components/products/product-list";

export default function Home() {
  const product = [
    {
      id: 1,
      name: "iphone 17"
    },
    {
      id: 2,
      name: "iphone 16"
    },
    {
      id: 3,
      name: "iphone 15"
    },
    {
      id: 4,
      name: "iphone 14"
    },
    {
      id: 5,
      name: "iphone 13"
    },
  ]
  return (
    <div className="">
      {/* <Hero /> */}
      <ProductList productlist = {product} title="Newest Arrivel" />
    </div>
  );
}
