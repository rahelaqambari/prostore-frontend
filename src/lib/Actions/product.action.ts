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
    'name'.FormData.get('product_name'),
    'price'.FormData.get('product_price'),
    'category'.FormData.get('product_category'),
    'brand'.FormData.get('product_brand'),
    'description'.FormData.get('product_description'),
    'stock'.FormData.get('product_stock'),
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
