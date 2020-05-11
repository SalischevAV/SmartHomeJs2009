"use strict"; //2015
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const TVCHANNELS = new Map([[1, "UT-1"], [2, "TRK Ukraine"], [3, "1+1"], [4, "ICTV"], [5, "Noviy"], [6, "TET"], [7, "NLO"], [8, "M1"], [9, "Football-1"], [10, "TV1000"]]);
const RADIOCHANNELS = ["HitFM", "RadioRocks", "Shanson", "RusskoeRadio", "JamFM", "SharmankaFM", "Dovira", "MelodiyaFM"];
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
class Validator{

    static isValueString(value){
        if (typeof value == `string`){
            return true;
        } else {
            return false;
        }
    }

    static isValueBoolean(value){
        if (typeof value == `boolean`){
            return true;
        } else {
            return false;
        }
    }

    static isValueNumber(value){
        if (typeof value == `number`){
            return true;
        } else {
            return false;
        }
    }

    static isValueArray(value){
        if (Array.isArray(value)){
            return true;
        } else {
            return false;
        }
    }
}




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

//--------------------------------------------------------------------------
class Regulator {
    constructor(min =0, max = 100, currentValue = 0){
        this.__min = min;
        this.__max = max;
        this.__currentValue = currentValue;
    }

    getMinMax(){
        return [this.__min, this.__max];
    }

    set currentValue(value){
        if (Validator.isValueNumber(value) && value <= this.__max && value >= this.__min){
            this.__currentValue = value;
        }  
    }

    get currentValue(){
        return this.__currentValue;
    }

    currentValueUp(){
        if (this.__currentValue == this.__max){}
            else{ this.__currentValue++;}
    }

    currentValueDown(){
        if (this.__currentValue == this.__min){}
            else{ this.__currentValue--;}
    }
}

//----------------------------------------------------------------------------
class Device{
    constructor(brand, power = false){
        if(Validator.isValueString(brand)){
            this._brand = brand; 
        } else throw new Error(`Brand must be string`);

        if(Validator.isValueBoolean(power)){
        this._power = power;
        } else throw new Error(`Power must be boolean`);
    }

    get brand(){
        return this._brand; 
    }
    getPower(){
        return this._power;
    }

    powerOn(){
        this._power = true;    
    }

    powerOff(){
        this._power = false;    
    }

    timerForPower(time, flag){   //time - interval minutes(int), flag - power on/off (boolean)
        if(Validator.isValueNumber(time) && Validator.isValueBoolean(flag)){         //надо переделать чтобы выбрасывало ошибку по каждому парметру
             if (flag === true) {
                 setTimeout(this.powerOn.bind(this), time*6000);
            } else if (flag ===  false) {
                 setTimeout(this.powerOff.bind(this), time*6000);
             }
         } else throw new Error(`Invalid timer parametr`);
     }

     toString(){
        return (`${this.constructor.name}, brandname: ${this._brand}, power : ${this.getPower()}`);
    }
}

//---------------------------------------------------------------------------------------------
class SoundDevice extends Device{
    constructor(brand, power = false, volumeLevel = new Regulator()){
        super(brand, power = false);
        this._volumeLevel = volumeLevel;
    }

    volumeUp() {
        this._volumeLevel.currentValueUp();
    };

    volumeDown() {
        this._volumeLevel.currentValueDown();
    };

    setVolume (value){
        this._volumeLevel.currentValue = value;
    }

    get volume(){
        return this._volumeLevel.currentValue;
    }

    toString (){
        return super.toString() + `, volume level: ${this.volume}`;
    }
}

//--------------------------------------------------------------------------
class Mp3Player extends SoundDevice{
    constructor(brand, diskName, power = false, volumeLevel = new Regulator(), disk = ["track1", "track2", "track3", "track4", "track5"], currentTrack = 1){
        super(brand, power = false, volumeLevel = new Regulator());
        this._currentTrack = currentTrack;
        this._diskName = diskName;
        this._disk = disk;
    }

    get track() {
        return this._disk[this._currentTrack - 1];
    }

    set track(number){
        if (0 < number && number < this._disk.length){
            this._currentTrack = number;
        }
    }

    get disk(){
        return this._disk;
    }

    set disk(disk){
        if (Validator.isValueArray(disk)){
            this._disk = disk;
        }
    }

    setTrack(number){
        if (0 < number && number < this._disk.length){
            this._currentTrack = number;
        }
    }

    nextTrack(){
        if (this._currentTrack >= this._disk.length) {
            this._currentTrack = this._disk.length;
        } else this._currentTrack++;
       
    }

    previousTrack(){
        if (this._currentTrack == 1) {
            //this.track = 1 ;
        } else this._currentTrack--;
    }

    toString(){
        return super.toString() + `, disk name: ${this._diskName}, current track: ${this._currentTrack}`;
    }

}
//--------------------------------------------------------------------

class TV extends SoundDevice{
    constructor(brand, power = false, volumeLevel = new Regulator(), currentChannel = new ChannelReciver(TVCHANNELS)){
        super(brand, power = false, volumeLevel = new Regulator());
        this._currentChannel = currentChannel;
    }

    nextChannel(){
        this._currentChannel.channelUp();
    }

    previousChannel(){
        this._currentChannel.channelDown();
    }

    setChannel(value){
        this._currentChannel.setChannel(value);
    }

    getChannelList (){
        return this._currentChannel.getChannelList();
    }

    get channel(){
        return this._currentChannel.channel;
    }

    toString(){
       return super.toString() + `, current channel: ${this._currentChannel.channel}`
    }
}
