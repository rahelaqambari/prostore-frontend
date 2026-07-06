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

export async function storeProduct(preves:unknown , formData:FormData) {
  const formdata = {
    name: formData.get("product_name"),
    price: formData.get('product_price'),
    category: formData.get('product_category'),
    brand: formData.get('product_brand'),
    description: formData.get ('product_description'),
    stock: formData.get('product_stock'),
  }
  const data = await fetch("http://localhost:8000/api/dashboard/store-product",{
    body: formdata,
        headers:{
            accept : "application/json",
            'authorization' : 'bearer'
        },
        method: "POST"
  });

}
