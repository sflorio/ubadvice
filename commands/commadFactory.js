const CommandsEnum = require("./commandEnum");
const Ping = require("./Ping");
const Question = require("./Question");
const NotFound = require("./NotFound");

class CommandFactory {
    constructor(){

    }

    create(command){
        if(command == CommandsEnum.PING){
            return new Ping();
        }

        if(command == CommandsEnum.QUESTION){
            return new Question();
        }
            
        return new NotFound();
    }

}

module.exports = new CommandFactory();