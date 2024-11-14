import axios, { Axios } from "axios";
import { RegisterFormData} from '../types/types';


const api = new Axios({ baseURL:'http://localhost:3000'})
export const listAllProducts = async () => {
    // const result = (await api.get<ApiResponse<Category[]>>('/estoque/storageFront/1')).data
    // if(result.success){
    //     return result.data.flatMap(category => (category.products))
    // }
    // throw new Error('Não foi possível carregar os produtos')
    return  {
        
           "success": true,
           "data": [
               {
                   "id": 2,
                   "name": "Limpeza",
                   "deleted_at": null,
                   "categories": []
               },
               {
                   "id": 4,
                   "name": "Cozinha",
                   "deleted_at": null,
                   "categories": [
                       {
                           "id": 3,
                           "name": "Perecíveis",
                           "storage_front_id": 4,
                           "deleted_at": null,
                           "products": [
                               {
                                   "id": 4,
                                   "measurement_unit_id": 1,
                                   "category_id": 3,
                                   "name": "Veja",
                                   "quantity": 40,
                                   "min_quantity": 10,
                                   "created_by_user_id": 1,
                                   "updated_by_user_id": null,
                                   "deleted_at_by_user_id": null,
                                   "deleted_at": null,
                                   "created_at": "2024-11-01T00:30:18",
                                   "updated_at": null,
                                   "observation": "Produto de limpeza"
                               }
                           ]
                       },
                       {
                           "id": 4,
                           "name": "Não-Perecíveis",
                           "storage_front_id": 4,
                           "deleted_at": null,
                           "products": []
                       },
                       {
                           "id": 5,
                           "name": "Enlatado",
                           "storage_front_id": 4,
                           "deleted_at": null,
                           "products": []
                       },
                       {
                           "id": 6,
                           "name": "Não-Enlatados",
                           "storage_front_id": 4,
                           "deleted_at": null,
                           "products": []
                       }
                   ]
               }
           ],
           "error": ""
        }
}

export const registerUser = (userData: RegisterFormData) => {
    return api.post('/site/users', userData);
  };

export const getProducts = () => api.get('/site/products');
export const getProductById = (id: string) => api.get(`/site/products/${id}`);
export const getEvents = () => api.get('/site/events');
export const getEventsById = (id: string) => api.get(`/site/events/${id}`);
