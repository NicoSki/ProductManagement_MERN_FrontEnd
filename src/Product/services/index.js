import axios from 'axios';

const baseURL = "https://productmanagementmernbackend-production.up.railway.app/mern";

export async function getProducts(){
  try {
    const res = await axios({
      url:`${baseURL}/products`,
      method: 'GET'
    })

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategory(category){
  try {
      const res = await axios({
      url:`${baseURL}/products/${category}`,
      method: 'GET'
    })

    return res;
  } catch (error) {
    console.log(error);
  }
}


export async function saveProduct(productData){
  try {
    // console.log(productData);

   const formData = {
      name: productData.name,
      priceUnitary: productData.priceUnitary,
      size:productData.size,
      description: productData.description,
      imgUrl: productData.imgUrl,
      category:productData.category
    }

    const res = await axios({
      url:`${baseURL}/products`,
      method: 'POST',
      data: formData
    })

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(id){
  try {
    const res = await axios({
      url: `${baseURL}/deleteProduct/${id}`,
      method: 'DELETE'
    });

    return res;
  } catch (error) {
    console.log(error);
  }
}
