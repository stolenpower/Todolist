module.exports = {
    addTask: async function(taskName, taskDescription) {
        console.log("calling contract");
        app.sdb.lock('todolist.addTask@' + this.trs.senderId)
        let exists = await app.model.Todolist.exists({taskName: taskName, owner: this.trs.senderId});
        if (!exists) {
            app.sdb.create('Todolist', {
              taskName: taskName,
              taskDescription:taskDescription,
              owner: this.trs.senderId
            });
        } else {
          return 'Already Exists';
        }
    },


    completeTask: async function(taskName){
        app.sdb.lock('todolist.completeTask' + this.trs.senderId)
        let exists = await app.model.Todolist.exists({taskName: taskName, owner: this.trs.senderId});
        if (exists){
            app.sdb.update('Todolist',{taskStatus: 1},{owner: this.trs.senderId});
        }
        else{
          return 'Task Not Found!';
        }
    }
  }
