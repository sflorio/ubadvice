const CommandsEnum = require("./commandEnum");
const Ping = require("../Ping");
const Question = require("../Question");
const NotFound = require("../NotFound");
const Play = require("../PlaySong");

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

        if(command == CommandsEnum.PLAY){
            return new Play();
        }
            
        return new NotFound();
    }

}

module.exports = new CommandFactory();