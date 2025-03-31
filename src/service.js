import axios from 'axios';

// const apiUrl = "http://localhost:5141"
const apiUrl=process.env.REACT_APP_SERVER_API_URL

export default {
  getTasks: async () => {
    console.log("API URL:", apiUrl);
    try { 
    const result = await axios.get(`${apiUrl}/items`)
    return result.data;// מחזיר את הפריט שנוצר
    } catch (error) {
      console.error('Error get items:', error);
      throw error; // מטפל בשגיאות
    }
  },

  addTask: async (name) => {
    console.log('addTask', name)
    try {
      
      const response = await axios.post(`${apiUrl}/items/creatItem${name}`);
      return response.data; // מחזיר את הפריט שנוצר
    } catch (error) {
      console.error('Error creating item:', error);
      throw error; // מטפל בשגיאות
    }
  },

  setCompleted: async (id, isComplete) => {
    console.log('setCompleted', { id, isComplete })
    try {
      
      const result = await axios.put(`${apiUrl}/items/${id}`, null, {
        params: { IsComplete: isComplete },
      });
    } catch (error) {
      console.error('Error set item:', error);
      throw error; // מטפל בשגיאות
    }
   

    return {};
  },

  deleteTask: async (id) => {

    console.log('deleteTask')
    try {
      await axios.delete(`${apiUrl}/items/${id}`);
      return true; // מחזיר true אם המחיקה הצליחה
    } catch (error) {
      console.error('Error deleting item:', error);
      throw error; // מטפל בשגיאות
    }
  }
};
