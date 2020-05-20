"use strict";
class TV extends SoundDevice{
    constructor(brand, power = false, aviableSSID = new Set(), volumeLevel = new Regulator(), currentChannel = new ChannelReciver(TVCHANNELS)){
        super(brand, power = false, aviableSSID = new Set(), volumeLevel = new Regulator());
        this._currentChannel = currentChannel;
    }

    nextChannel(){
        if(this.power){
        this._currentChannel.channelUp();
        }else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    }

    previousChannel(){
        if(this.power){
        this._currentChannel.channelDown();
        } else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    }

    setChannel(value){
        if(this.power){
        this._currentChannel.setChannel(value);
        }else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    } 

    get channelList (){
        return this._currentChannel.getChannelList();
    }

    get channel(){
        return this._currentChannel.channel;
    }

    toString(){
       return super.toString() + `, current channel: ${this._currentChannel.channel}`
    }
}