const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: {
        required: true,
        type:  mongoose.Schema.ObjectId,
        ref: "User"

    }
    
});

module.exports = mongoose.model("Company", companySchema);