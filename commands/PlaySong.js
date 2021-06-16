const config = require('config');
const CommandBase = require("./core/commandBase");
//local-constants
const resourceFolder_Key = "resourcefolder";
const AudioResourceName_key = "tranquisong";
//keys
const resourceFolder= config.get(resourceFolder_Key);
const AudioResourceName = config.get(AudioResourceName_key);
//resources
const AudioResource = `${resourceFolder}/${AudioResourceName}`;

class PlaySong extends CommandBase {
    constructor(){
        super();
        this.CommandName == "tranquisong";
    }


    action(message){
        var VC = message.member.voice.channel;
        if (!VC)
            return message.reply("Si no hay nadie en el canal de voz no canto!")

        VC.join()
            .then(connection => {
                const dispatcher = connection.play(AudioResource);
                dispatcher.on("end", end => {VC.leave()});
            })
            .catch(console.error);

        return "Playing a little song to melt iced harts...";
    }

}

module.exports = PlaySong;