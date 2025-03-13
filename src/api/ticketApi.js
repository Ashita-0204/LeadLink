import axios from "axios";

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/api/tickets", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhMDZhZjYzMDU3MzY2NzRjZTNhYzgxIn0sImlhdCI6MTc0MTg2ODIzMSwiZXhwIjoxNzQxODcxODMxfQ.6SWLU5EL82TbPdwXgxQYa-WOdHVtXbWYPZq8EnqeIiQ",
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
