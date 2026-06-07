"use server";

export async function getReviews() {
  const data = await fetch("http://localhost:8000/api/reviews");
  const response = await data.json();
  return response;
}
export async function createReview(preves:any , formData:FormData){
  try{
      const data = await fetch("http://localhost:8000/api/reviews" ,{
        body: formData,
        headers:{
            accept : "application/json",
        },
        method: "POST"
    });
    // revalidatePath(`/products/${formData.get('product_id')}`);
    return {
        success: false,
        message: "adedd reviews",
    }
  }
  catch(err){
    return {
        success: true,
        message: " somting went wrong",
    }
  }
}
