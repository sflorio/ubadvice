const CommandBase = require("./core/commandBase");

class NotFound extends CommandBase{
    constructor(){
        super();
        this.CommandName="";
    }

    action(){
        return "Command not found!";
    }

}

module.exports = NotFound;