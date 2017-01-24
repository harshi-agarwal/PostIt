var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var QuestionSchema=new mongoose.Schema({
  ques:{
    type:String,
  required:[true,"name cannot be blank"],
},
desc:{type:String},
user:{type:Schema.Types.ObjectId,ref:'User'},
answers:[{type:Schema.Types.ObjectId,ref:'Answer'}],
count_ans:{type:Number},
},{timestamps:true})
mongoose.model('Question',QuestionSchema);
