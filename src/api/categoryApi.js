import axios from "axios";

// backend URL your manager gave (replace if different)
const BASE_URL = "http://127.0.0.1:8000/api/admin/categories/";

// to get all categories
export const getCategories = () => axios.get(BASE_URL);

// to add a new category
export const addCategory = (data) => axios.post(`${BASE_URL}add/`, data);

// to delete a category
export const deleteCategory = (id) => axios.delete(`${BASE_URL}${id}/delete/`);
