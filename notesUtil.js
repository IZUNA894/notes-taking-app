notes=[];
var chalk = require('chalk');

var fs = require("fs");
function laodNotes()
{
  try{
  var data = fs.readFileSync('notes.json');
  data = data.toString();
  data = JSON.parse(data);
  return data;
}catch(e)
{
  return [];
}

}
module.exports.read = function (title) {
  var data = laodNotes();
 var note = data.find(function(item){
 return (item.title == title) });
 if(note)
 console.log(note)
 else {
   console.log(chalk.red("not found"));
 }
}
module.exports.add= function(title,body){
  var data = laodNotes();
//  console.log(data);

  var obj = { title: title, body: body};
  var duplicateNotes = data.filter(function(item){
    if(item.title === obj.title)
    {
      return 1;
    }
    else {
      return 0;
    }
  });
  //console.log(duplicateNotes);
  debugger
  if(duplicateNotes.length === 0)
  {
  data.push(obj);
  console.log("adding");
}
else
  {
    console.log("sorry title was already taken...");
  }
  saveNotes(data);
}

 function saveNotes(data)
 {
   fs.writeFileSync("notes.json",JSON.stringify(data));
 }
 module.exports.remove = function(title)
 {
   var data = laodNotes();

   var duplicateNotes = data.filter(function(item)
 {
   if (title === item.title)
   {
     console.log("delting a note..");
     return 0;
   }
   else {
     return 1;
   }
 });
 saveNotes(duplicateNotes);
 }
