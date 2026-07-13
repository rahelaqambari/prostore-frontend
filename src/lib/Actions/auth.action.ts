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
                message: 'passwords not match',
                status: false
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
        message: response,
        status: true,
     };
    }
}
    catch($err){
    return {
        message: "Unable to sign up",
        status: false, 
    }
    }
    
}



export async function CreateToken(preves:unknown , formData:FormData) {
    try{
        const token = formData.get("token");
        const rememberToken = formData.get("rememberToken");
        if(token !== rememberToken){
            return {
                message: 'The User IS Authorized',
                status: false
            }
        }
        else{
    const data = await fetch("http://localhost:8000/api/token",{
        method: "POST",
        body: formData,
         headers:{
            accept : "application/json",
        },
    });
     const response = await data.json();
     return {
        message: response,
        status: true,
     };
    }
}
    catch($err){
    return {
        message: "Unable to sign up",
        status: false, 
    }
    }
    
}


export async function FeatchAllCustomer(token:string) {
    const data = await fetch(`http://localhost:8000/api/all-user`,{
         headers:{
            accept : "application/json",
        },
        method: "POST"
    });
    const response = await data.json();

    return response;
    
}