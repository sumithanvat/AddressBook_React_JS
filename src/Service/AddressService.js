import axios from "axios";

class AddressService{
    baseUrl="http://localhost:8089";
    addContact(data){
        return axios.post(`${this.baseUrl}/addcontact`, data);
    }
    getAllContact(){
        return axios.get(`${this.baseUrl}/getallcontact`);
    }
    getContactById(id){
        return axios.get(`${this.baseUrl}/getcontactbyid/${id}`)
    }
    deleteContact(id){
        return axios.delete(`${this,this.baseUrl}/deletebyid/${id}`)
    }
    updateContact(id,data){
        return axios.put(`${this.baseUrl}/updatecontact/${id}`,data)
    }
}
export default new AddressService()