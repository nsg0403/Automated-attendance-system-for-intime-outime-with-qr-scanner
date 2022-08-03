const mongoose = require('mongoose')

const student_schema = mongoose.model('student_schema', {


    name: {
        type: String,
        require: true,
    },

    btno: {
        type: String,
        require: true,
    },

    branch: {
        type: String,
        require: true,
    
    },
    hostel: {
        type: String,
        require: true,
    },
    phonenumber: {
        type: String,
        require: true,
    }

   

})

module.exports = student_schema