
const express = require("express");
const app = express();
const student_schema=require('./schema/schema')

app.use(express.json());



require("./connection");

app.listen(3000, console.log("server is running on port 3000"));

const studentForm = async (req, res) => {
    try{
        const student= await new student_schema({
            name:req.body.name,
            btno:req.body.btno,
            branch:req.body.branch,
            hostel:req.body.hostel,
            phonenumber:req.body.phonenumber,

        });
        student.save();
        res.status(200).json({ student });
    }catch(err){
        res.status(500).json({ msg: err});
        console.log(err);
    }
};

const updateStudent= async(req,res) =>{

    try{
        const student= await student_schema.find({id:req.params.id});
        if(!student){
            return response.status(401).json("You are not a registered user");
        }else{
            const update={
            name:req.body.name,
            btno:req.body.btno,
            branch:req.body.branch,
            hostel:req.body.hostel,
            phonenumber:req.body.phonenumber}

            
        await student_schema.findByIdAndUpdate(req.parmas.id,{$set:update})
        const student = await student_schema.findById(req.params.id);
        return res.status(201).json({ student });
        }
    }catch(err){
        res.status(500).json({ msg: err });
    }
};

const viewSingleStudent = async (request, response) => {
    try {
      const student = await student_schema.findById(request.params.id);
      response.status(200).json({ student });
    } catch (error) {
      response.status(500).json({ msg: error });
    }
  };
module.exports={studentForm,updateStudent,viewSingleStudent};

app.post('/postStudent',studentForm);
app.get('/:id',viewSingleStudent);
