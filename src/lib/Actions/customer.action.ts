export async function getAllUsers(): Promise<any>{
    const data = await fetch("http://localhost:8000/api/dashboard/all-user");
    const response = await data.json();
    return response;
}
