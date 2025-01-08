const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mealventures:mealventures21@cluster0.sccp2dh.mongodb.net/Meal_Ventures?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database named Meal-Venture');
});



const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true 
  },
  password: {
    type: String,
    required: true
  },
  registration_date: {
    type: Date,
    default: Date.now
  },
  update_date: {
    type: Date,
    default: Date.now
  }
});

const UserModel = mongoose.model("mv_users", userSchema);


const recipeSchema = new mongoose.Schema({
  RECIPE_ID: Number,
  RECIPE_NAME: String,
  INGRIDENTS: String,
  PREPARATION_TIME: Number,
  COOKING_TIME: Number,
  TOTAL_TIME: Number,
  SERVINGS: Number,
  CATEGORY_NAME: String,
  COURSE: String,
  DIET_NAME: String,
  INSTRUCTIONS: String,
});

const RecipeModel = mongoose.model('mv_master_datas', recipeSchema); //replace collection name with required one

app.get('/api/search', async (req, res) => {
  console.log('Incoming request:', req.query); // Debugging statement to see incoming request query parameters
  const query = req.query.query;
  const CATEGORY_NAME = req.query.CATEGORY_NAME;
  const DIET_NAME = req.query.DIET_NAME;

  let filter = { RECIPE_NAME: { $regex: query, $options: 'i' } };

  if (CATEGORY_NAME) {
    filter.CATEGORY_NAME = CATEGORY_NAME;
  }

  if (DIET_NAME) {
    filter.DIET_NAME = DIET_NAME;
  }

  try {
    const recipes = await RecipeModel.find(filter);
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/recipes', async (req, res) => {
  let { RECIPE_ID } = req.params;
  RECIPE_ID = RECIPE_ID || '20'; // Default RECIPE_ID to '1' if not provided

  try {
    const recipe = await RecipeModel.findOne({ RECIPE_ID: RECIPE_ID });
    if (!recipe) {
      return res.status(404).send('Recipe not found');
    }
    
    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});




app.get("/login",cors(),(req,res)=>{

})

app.post("/login",async(req,res)=>{
    const{email,password}=req.body

   
    try{
        const check=await UserModel.findOne({email:email})
        const check2=await UserModel.findOne({password:password})
        if(check && check2){
            res.json("Exists")
        }
        else{
            res.json("Not Found")
        }
        
    }
    catch(e){
        res.json("Error")
    }
})


app.post("/signup",async(req,res)=>{
    const{fname,lname,email,password}=req.body

    const data={
        fname:fname,
        lname:lname,
        email:email,
        password:password
    }

    try{
        const check=await UserModel.findOne({email:email})

        if(check){
            res.json("Exists")
        }
        else{
            res.json("Not Found")
            await UserModel.insertMany([data])
        }
        
    }
    catch(e){
        res.json("Error")
    }
})





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
