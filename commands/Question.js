const CommandBase = require("./commandBase");

class Question extends CommandBase {
    constructor(){
        super();
        this.CommandName == "question";
    }


    action(){
        return "Tranqui man";
    }

}

module.exports = Question;