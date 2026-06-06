import Image from "next/image";
import Footer from "../../components/footer";
import Header from "../../components/shared/header";
import ProductList from "@/components/shared/products/product-list";
import { GetProducts } from "@/lib/Actions/product.action";
import Hero from "@/components/Hero";

export default async function Home() {
  const products = await GetProducts();
  return (
    <div className="">
      <Hero />
      <ProductList limit={4}  productList={products} title="Newest Arrivel" />
    </div>
  );
}
