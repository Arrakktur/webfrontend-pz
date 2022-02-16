export class configs{
    public readonly commandServer = {
        getStage: "command=getStage&server=",
        start: "command=start&server=",
        stop: "command=stop&server=",
        getMessage: "command=getMessage",
        postMessage: "command=newMessage&message=",
        getMods: "command=getModName&server=",
    }

    public readonly host = 'http://91.201.254.176:34853/control';

    public readonly params = {
        headers: {
            "Content-type": "application/x-www-form-urlencoded",
        }
    }
}