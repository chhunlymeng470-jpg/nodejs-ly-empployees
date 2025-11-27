import express, {Request, Response} from "express";


require("dotenv").config(); 
const cors = require("cors"); 
const app = express(); 
 
app.use(cors()); 
 
const PORT = process.env.PORT || 8000; 
 
app.use(express.json()); 
 
app.listen(PORT, () => {
  
  console.log(`Server is running on http://localhost:${PORT}`); 
});

//create an aip
app.get("/empployees", async (req: Request, res: Response) => {
    const empployees = [
    { name: "John Doe", email: "john.doe@example.com", phone: "+1234567890" },
    {
      name: "Joel Smith",
      email: "joel.smith@example.com",
      phone: "+0987654321",
    },
    {
      name: "Meng Chhunly",
      email: "mmengchhunly@gmail.com",
      phone: "+88510575652",
    },
  ];
 
  return res.status(200).json(empployees);
})