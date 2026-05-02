export async function GetProducts(){
    const data = await fetch("http://localhost:8000/api/products");
    const response = await data.json();
    return response;
}   