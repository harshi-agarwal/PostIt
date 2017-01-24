var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var AnswerSchema=new mongoose.Schema({
  answer:{
    type:String,
  required:[true,"name cannot be blank"],
},
count:{type:Number},
likes:{type:Number},
user:{type:Schema.Types.ObjectId,ref:'User'},
ques:{type:Schema.Types.ObjectId,ref:'Question'}
},{timestamps:true})
mongoose.model('Answer',AnswerSchema);
