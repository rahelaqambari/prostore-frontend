import Image from "next/image";
import Footer from "./Products/footer";
import Header from "../../components/shared/header";
import Hero from "@/components/hero";
import ProductList from "@/components/shared/products/product-list";
import { GetProducts } from "@/lib/Actions/product.action";

export default async function Home() {
  const products = await GetProducts();
  return (
    <div className="">
      <Hero />
      <ProductList limit={4}  productlist={products} title="Newest Arrivel" />
    </div>
  );
}
