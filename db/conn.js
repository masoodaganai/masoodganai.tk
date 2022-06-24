const mongoose=require('mongoose');

const DB = 'mongodb+srv://masoodahamed:Spell1144@cluster0.zzc77.mongodb.net/MERNwithmasood?retryWrites=true&w=majority'


mongoose.connect(DB).then(()=>{
     console.log('connection successfull');
 
  }).catch((err) => console.log('no connection ',err));
  