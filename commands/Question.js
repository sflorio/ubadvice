const CommandBase = require("./core/commandBase");

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