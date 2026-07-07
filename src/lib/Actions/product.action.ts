'use server'
export async function getProducts() {
  const data = await fetch(`http://localhost:8000/api/Product`);
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
  // const formdata = {
  //   name: formData.get('product_name'),
  //   price: formData.get('product_price'),
  //   stock: formData.get('product_stock'),
  //   brand: formData.get('product_brand'),
  //   category: formData.get('product_category'),
  //   description: formData.get('product_description'),
  //  image1: formData.get('product_image'),
  //  image2: formData.get('product_image'),
  // }
  const data = await fetch("http://localhost:8000/api/products",{ 
     method: 'POST',
    headers:{
             accept : "application/json",
            'Content-Type': 'application/json',
    },
      body: formData,
});
  if(data.status === 200){
    console.log('data inserted')
    return {
      data: "data inserted successfully",
      status: true
    }
  }
  else 
    return {
  data: "somethng went wrong",
  status: false
}
  
  }
