import Image from "next/image";
import Footer from "./Products/footer";
import Header from "../../components/header";
import Hero from "@/components/hero";
import ProductList from "@/components/products/product-list";
import { GetProducts } from "@/lib/Actions/product.action";

export default async function Home() {
  const product = await GetProducts();
  return (
    <div className="">
      {/* <Hero /> */}
      <ProductList productlist = {product} title="Newest Arrivel" />
    </div>
  );
}
