import ProductList from "@/components/shared/products/product-list";
import { getProducts } from "@/lib/Actions/product.action";

import { ProductInfo } from "@/types";

export default async function Home() {
  const data = await getProducts();
  return (
    <div>
      <ProductList limit={data} productList={ProductList} title="Newest Arrival" />
    </div>
  );
}
