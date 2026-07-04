export async function getProducts() {
  const data = await fetch(`http://localhost:8000/api/products`);
  const response = await data.json();
  return response;
}

export async function getAllProducts(url: string) {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}

export async function fetchAllProducts() {
  const data = await fetch("http://localhost:8000/api/dashboard/all-products");
  const response = await data.json();
  return response.products.data;
}

export async function storeProduct() {
  const data = await fetch("http://localhost:8000/api/dashboard/store-product",{
    body: FormData,
        headers:{
            accept : "application/json",
        },
        method: "POST"
  });

}
