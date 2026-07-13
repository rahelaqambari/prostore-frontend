export async function getAllUsers(): Promise<any>{
    const data = await fetch("http://localhost:8000/api/dashboard/all-user");
    const response = await data.json();
    return response;
}

export async function deleteUser(preves:unknown , formData:FormData){
    try{
    const data = await fetch(`http://localhost:8000/api/dashboard/all-user/${formData.get("id")}`,
    {
         method: 'DELETE',
    },
    );
    const response = await data.json();
    return {
        message: "User Deleted Successfully",
        state: true,
    };
    }catch (err){
        return {
            message: "user deleted",
            state: false,
        }
    }
}
