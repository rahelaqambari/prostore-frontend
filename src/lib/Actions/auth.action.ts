export default async function login(
    preves: unknown,
    formData: FormData
) {
   const data = await fetch("http://localhost:8000/api/auth" ,{
        body: formData,
        headers:{
            accept : "application/json",
        },
        method: "POST" 
    });
    const response = await data.json();
    console.log(response);
    return response ;
}

export async function getUser(token:string) {
    const data = await fetch(`http://localhost:8000/api/user`,{
         headers:{
            accept : "application/json",
        },
        method: "POST"
    });
    const response = await data.json();

    return response;
    
}

export async function SignUp(preves:unknown , formData:FormData) {
    try{
        const password = formData.get("password");
        const confirmpassword = formData.get("confirmpassword");
        if(password !== confirmpassword){
            return {
                Message: 'passwords not match',
                Status: false
            }
        }
        else{
    const data = await fetch("http://localhost:8000/api/signup",{
        method: "POST",
        body: formData,
         headers:{
            accept : "application/json",
        },
    });
     const response = await data.json();
     return {
        Message: response,
        Status: true,
     };
    }
}
    catch($err){
    return {
        Message: "Unable to sign up",
        Status: false, 
    }
    }
    
}