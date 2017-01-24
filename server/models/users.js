var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var UserSchema=new mongoose.Schema({
  name:{
    type:String,
  required:[true,"name cannot be blank"],
  },
_questions:[{type:Schema.Types.ObjectId,ref:'Question'}],
_answers:[{type:Schema.Types.ObjectId,ref:'Question'}],
})
mongoose.model('User',UserSchema);
