"use strict";
class ChannelReciver{  
                                                                                                //channelList = new Map(), currentChannel=[0, ""]
    constructor(channelList = new Map(), currentChannel=[0, ""]){
        this.__channelList = channelList;
        this.__currentChannel = currentChannel;
        this.__psevdoChannelList = this.__getArrFromMapKeys();
        this.__psevdoCurrentCnannel = this.__psevdoChannelList[0];
    }

    __getArrFromMapKeys(){
        let res = [];
        for (let key of this.__channelList.keys()){
            res.push(key);
        }
        return res;
    }

    channelUp(){
        if (this.__psevdoCurrentCnannel >= this.__psevdoChannelList.length){}
            else (this.__psevdoCurrentCnannel++);
    }

    channelDown(){
        if (this.__psevdoCurrentCnannel <= 1){}
            else (this.__psevdoCurrentCnannel--);
    }

    set channel(value){
        if (Validator.isValueNumber(value) && value >= 0 && value <= (this.__psevdoChannelList.length-1)){
            this.__psevdoCurrentCnannel = value;
        }
    }

    get channel(){
        this.__currentChannel[0] = this.__psevdoCurrentCnannel;
        this.__currentChannel[1] = this.__channelList.get(this.__psevdoCurrentCnannel);
        return this.__currentChannel;
    }

    getChannelList(){
        let res = "";
    for (let entry of this.__channelList){
        res += entry + `\n`;
    }
    return res;
    }
}