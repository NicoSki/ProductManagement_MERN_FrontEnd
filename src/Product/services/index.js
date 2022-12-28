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

    const formData = new FormData();

    formData.append('name', productData.name);
    formData.append('priceUnitary', productData.priceUnitary);
    formData.append('size', productData.size);
    formData.append('description', productData.description);
    formData.append('category', productData.category);
    formData.append('imgUrl', productData.image);

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
