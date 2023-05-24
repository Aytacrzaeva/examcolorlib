const express = require("express");
const app = express();
const cors= require("cors")
app.use(cors());
const PORT = 7070;
const MongooseConnect =
  "mongodb+srv://AytacRzayeva:Aytac123@cluster0.xz3ku7i.mongodb.net/";
const mongoose = require("mongoose");
app.use(express.json());

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  detail:{
    type: String,
    required: true,
  }
});

const Products = mongoose.model("Products", productSchema);

app.post("/", async (req, res) => {
  const newpProdct = new Products({
    ...req.body,
  });
  await newpProdct.save();
  res.send(newpProdct);
});
app.get("/", async (req, res) => {
  const data = await Products.find();
  res.send(data);
});
app.get ("/:id", async (req,res)=>{
    const {id} = req.params
    const target = await Products.findById(id)
    res.send(target)
})
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Products.findByIdAndDelete(id);
  res.send("product has been deleted");
});
app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedProduct = await Products.findByIdAndUpdate(id, { ...req.body });
});
mongoose.connect(MongooseConnect).then(() => {
  console.log("DB CONNECTED");
});
app.listen(PORT, () => {
  console.log("App running");
});