import axios from "axios"

const URL = "https://data.mongodb-api.com/app/trident-jewels-xjpws/endpoint"
class ProductDataService {

  get() {
    return axios.get(`${URL}/getallproducts`);
  }
 // createReview(data) {
 //   return axios.post("/review-new", data);
 // }

 // updateReview(data) {
 //   return axios.put("/review-edit", data);
 // }

 // deleteReview(id, userId) {
 //   return axios.delete(`/review-delete?id=${id}`, {data:{user_id: userId}});
 // }

 // getCuisines(id) {
 //   return axios.get(`/cuisines`);
 // }

}

export default new ProductDataService();