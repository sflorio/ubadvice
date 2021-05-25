const CommandBase = require("./commandBase");

class Ping extends CommandBase{
    constructor(){
        super();
        this.CommandName="ping";
    }

    action(){
        return "pong!";
    }

}

module.exports = Ping;