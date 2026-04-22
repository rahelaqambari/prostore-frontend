export async function GetProduct(){
    const data = await fetch('http://localhost:8000/api/products');
    const response = await data.json();
    console.log(response)
}