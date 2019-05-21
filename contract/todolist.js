module.exports = {
    AddTask: async function(taskName, taskDescription) {
        console.log("calling contract");
        app.sdb.lock('todolist.addTask@' + this.trs.senderId)
        let exists = await app.model.Todolist.exists({owner: this.trs.senderId})
        if (!exists) {
            app.sdb.create('Todolist', {taskName: taskName, taskStatus: false, taskDescription:taskDescription}, {owner: this.trs.senderId});
        } 
    },


    completeTask: async function(taskName){
        app.sdb.lock('todolist.completeTask' + this.trs.senderId)
        let taskstatus = await app.model.Todolist.taskstatus({taskName: taskName, owner: this.trs.senderId})
        if (!taskstatus){
            app.sdb.update('Todolist',{taskStatus: true},{owner: this.trs.senderId});
        }
        // else{
        //     app.sdb.false('Storage',{addTask: addTask},{owner: this.trs.senderId});
        // }
    }
  }
  
