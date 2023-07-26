const express = require ("express");
require("./connection");
const Student = require("./students");


const { LEGAL_TCP_SOCKET_OPTIONS } = require("mongodb");

const app = express();
const port = process.env.PORT || 3005;


app.use(express.json());
// ==============create a new student======================= 
app.post("/students", async (req, res) => {
    try {
        console.log(req.body);
        const user = new Student(req.body)
        await user.save()
        res.send("Data Posted Successfuly");
    } catch (error) {
        res.status(400).send(error);
    }
})
// ===========================get the data========================================= 
app.get('/students', async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
        console.log("Data get succefully");

    } catch (err) {
        res.send(err)
        console.log(err);

    }
})
//=========================Get data from individual id =============================
app.get("/students/:id", async(req,res)=>{
    try {
        const _id = req.params.id;
        
      const studentData = await Student.findById({_id});
      console.log(studentData);
      if(!studentData){
        return res.status(404).send();
      }else{
        res.send(studentData);
      }

        
    } catch (error) {
        console.log(error);
    }

})

// app.patch('/students', async (req, res)=>{
//     try{const userUpdate = await Student.update();
//     req.send(userUpdate);
//     console.log('Data updatded sucessfully');
//     }catch(err){
//         console.log(err);
//     }
// });


// =====================updating data============================== 
app.patch('/students/:id', async (req, res)=>{
    try{
        const _id = req.params.id;
        const userUpdate = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
    res.send(userUpdate);
    console.log('Data updatded sucessfully');
    }catch(err){
        res.status(400).send(userUpdate);
        console.log(err);
    }
});


// ===============================delete the data=================================
app.delete('/students/:id', async (req, res)=>{
    try{const _id = req.params.id;
        const deleteStusdent = await Student.findByIdAndDelete(req.params.id,);
        if(!req.params.id){
            return res.status(404).send();
        }
    res.send(deleteStusdent);

    console.log('Data deleted sucessfully');
    }catch(err){
        console.log(err);
    }
});


app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})
