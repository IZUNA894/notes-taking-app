var yargs = require('yargs');
var notesUtil= require('./notesUtil.js')

yargs.command({
  command:'add',
  describe:"this gonna add a new note",
  builder:{
    title : {
      describe:"take the title for the add command",
      demandOption:true,
      type:String
    },
    body : {
      describe:"take the title for the add command",
      demandOption:true,
      type:String
    }
  },
  handler: function(argv)
  {
    //console.log("adding a new notes");
    console.log("title is:" + argv.title);
    console.log("body is :" + argv.body);
    notesUtil.add(argv.title,argv.body);
  }
});
yargs.command({
  command:'remove',
  describe:'remove the note',
  builder :{
    title : {
      demandOption:true,
      type:String
    }
  },
  handler:function(argv)
  {
    console.log("removing a note");
    notesUtil.remove(argv.title);
  }
});
yargs.command({
  command:'list',
  describe:'list the note',
  handler:function()
  {
    console.log("listing all note");
  }
});
yargs.command(
  {
    command:'read',
    describe:'read a specific note',
    builder:{
      title:{
        demandOption:true,
        type:String
      }
    },
    handler:function(argv){
      notesUtil.read(argv.title);
    }
  }
)
yargs.command({
  command:'rename',
  describe:'renaming the note',
  handler:function()
  {
    console.log("renaming a note");
  }
});
//console.log(yargs.argv);
yargs.parse();
