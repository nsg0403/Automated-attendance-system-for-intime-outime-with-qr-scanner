const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect("mongodb+srv://mihikaparmar:IszkWMpiHWDaBDuM@cluster0.jipx8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
= await new student_schema({
            name:req.body.name,
            btno:req.body.btno,
            branch:req.body.branch,
            hostel:req.body.hostel,
            phonenumber:req.body.phonenumber,

        });
        student.save();
        res.status(200).json({ student });
    }catch(err){
        res.status(500).json({ msg: er