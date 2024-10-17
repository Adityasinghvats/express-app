import 'dotenv/config'
import express from 'express';

const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());

let dataAll = [];
let nextId = 1;

app.post('/add-data',(req,res) => {
    // destructing the json response
    const {name, price} = req.body;
    const newData = {id:nextId++, name, price};
    dataAll.push(newData);
    res.status(201).send(newData);
})

app.get('/all-data',(req,res) => {
    res.status(200).send(dataAll);
})

// get by id
app.get('/all-data/:id', (req, res) => {
    // get each data named t and compare id of t with the id received through request 
    const data = dataAll.find(t => t.id === parseInt(req.params.id));
    if(!data){
        return res.status(404).send("Data not found");
    }
    res.status(200).send(data);
})

// update
app.put('/update/:id', (req,res) => {
    const data = dataAll.find(t => t.id === parseInt(req.params.id));
    if(!data){
        return res.status(404).send("Data not found");
    }
    const {name, price} = req.body;
    data.name = name;
    data.price = price;
    res.status(202).send(data)
})

// delete
app.delete('/delete/:id',(req, res)=>{
    const index = dataAll.findIndex(t => t.id === parseInt(req.params.id));
    if(index === -1){
        return res.status(404).send("Not found");
    }
    dataAll.splice(index, 1);
    res.status(202).send("Successfuly deleted");
})

app.listen(port, () =>{
    console.log(`Server is running at port ${port}`)
})