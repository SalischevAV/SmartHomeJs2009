"use strict"

const TVCHANNELS = new Map([[1, "UT-1"], [2, "TRK Ukraine"], [3, "1+1"], [4, "ICTV"], [5, "Noviy"], [6, "TET"], [7, "NLO"], [8, "M1"], [9, "Football-1"], [10, "TV1000"]]);
const RADIOCHANNELS = ["HitFM", "RadioRocks", "Shanson", "RusskoeRadio", "JamFM", "SharmankaFM", "Dovira", "MelodiyaFM"];
//---------------------------------------------------------------
function ChannelReciver(channelList = new Map(), currentChannel=[0, ""]){
    this.__channelList = channelList;
    this.__currentChannel = currentChannel;

    
    this.__psevdoChannelList = this.__getArrFromMapKeys();
    this.__psevdoCurrentCnannel = this.__psevdoChannelList[0];
    
}

//channelReciver.prototype.nextChannel = function(){}
//previousChannel
//setChannel
//getCurrentChannel
ChannelReciver.prototype.__getArrFromMapKeys = function(){
    let res = [];
    for (let key of this.__channelList.keys()){
        res.push(key);
    }
    return res;
}

ChannelReciver.prototype.channelUp = function(){
    if (this.__psevdoCurrentCnannel >= this.__psevdoChannelList.length){}
    else (this.__psevdoCurrentCnannel++);
}

ChannelReciver.prototype.channelDown = function(){
    if (this.__psevdoCurrentCnannel <= 1){}
    else (this.__psevdoCurrentCnannel--);
}

ChannelReciver.prototype.setChannel = function(value){
    if (typeof value == `number` && value >= 0 && value <= (this.__psevdoChannelList.length-1)){
        this.__psevdoCurrentCnannel = value;
    }
}

/*ChannelReciver.prototype.__returnRealValueChannel = function(){
    this.__currentChannel[0] = this.__psevdoCurrentCnannel;
    this.__currentChannel[0] = this.__channelList.get(this.__psevdoCurrentCnannel);
}*/

ChannelReciver.prototype.getChannel = function(){
    this.__currentChannel[0] = this.__psevdoCurrentCnannel;
    this.__currentChannel[1] = this.__channelList.get(this.__psevdoCurrentCnannel);
    return this.__currentChannel;
}


ChannelReciver.prototype.getChannelList = function(){
    let res = "";
    for (let entry of this.__channelList){
        res += entry + `\n`;
    }
    return res;
}

//-----------------------------------------------------------------
function Regulator (min =0, max = 100, currentValue = 0){
    this.__min = min;
    this.__max = max;
    this.__currentValue = currentValue;
}
Regulator.prototype.getMinMax = function (){
    return [this.__min, this.__max];
}

Regulator.prototype.getCurrentValue = function(){
    return this.__currentValue;
}

Regulator.prototype.currentValueUp = function(){
    if (this.__currentValue == this.__max){}
        else{ this.__currentValue++;}
}

Regulator.prototype.currentValueDown = function(){
    if (this.__currentValue == this.__min){}
        else{ this.__currentValue--;}
}

Regulator.prototype.setCurrentValue = function(value){
    if (typeof value == `number` && value <= this.__max && value >= this.__min){
        this.__currentValue = value;
    }
}

//------------------------------------------------------------------------------
function Device (brand, power = false){
   
    this._brand = brand; 
    this._power = power;  
}
Device.prototype.getBrand = function(){
    return this._brand;    
}


Device.prototype.powerOn = function(){
    this._power = true;    
}

Device.prototype.powerOff = function(){
    this._power = false;    
}

Device.prototype.getPower = function(){
    return this._power;
}


Device.prototype.powerTimer = function(time, flag, callback){   //time - interval minutes(int), flag - power on/off (boolean)
   if(typeof time == `number` && typeof flag == `boolean`){         
        if (flag === true) {
            setTimeout(
                () => {
                this.powerOn();
                callback(this._power);
                },
                 time);
       } else if (flag ===  false) {
        setTimeout(
            () => {
            this.powerOff();
            callback(this._power);
            },
             time);
        }
    } else throw new Error(`Invalid timer parametr`);
}


Device.prototype.toString = function(){
    return (`${this.constructor.name}, brandname: ${this._brand}, power : ${this.getPower()}`);
}


//--------------------------------------------------------------------------------------------------------------------------

function SoundDevice (brand, power = false, volumeLevel = new Regulator()){ //абстрактній класс
    Device.call(this,brand, power = false);
    this._volumeLevel = volumeLevel;
}

SoundDevice.prototype = Object.create(Device.prototype);
SoundDevice.prototype.constructor = SoundDevice;

SoundDevice.prototype.toString = function(){
    return Device.prototype.toString.call(this) + `, volume level: ${this._volumeLevel.getCurrentValue()}`;
}

SoundDevice.prototype.volumeUp = function () {
    this._volumeLevel.currentValueUp();
};

SoundDevice.prototype.volumeDown = function () {
    this._volumeLevel.currentValueDown();
};

SoundDevice.prototype.setVolume = function(value){
    this._volumeLevel.setCurrentValue(value);
}

SoundDevice.prototype.getVolume = function(){
    return this._volumeLevel.getCurrentValue();
}


    
//--------------------------------------------------------------

    function Mp3Player(brand, diskName, power = false, volumeLevel = new Regulator(), disk = ["track1", "track2", "track3", "track4", "track5"], currentTrack = 1) {        
        SoundDevice.call(this, brand, power = false, volumeLevel = new Regulator() );
        this._currentTrack = currentTrack;
        this._diskName = diskName;
        this._disk = disk;
        }
    
    Mp3Player.prototype = Object.create(SoundDevice.prototype);
    Mp3Player.prototype.constructor = Mp3Player;
        

        Mp3Player.prototype.getTrack = function () {
            return this._disk[this._currentTrack - 1];
        };

        Mp3Player.prototype.setTrack = function (number) {
            if (0 < number && number < this._disk.length){
                this._currentTrack = number;
            }
        };

        Mp3Player.prototype.nextTrack = function () {
            if (this._currentTrack >= this._disk.length) {
                this._currentTrack = this._disk.length;
            } else this._currentTrack++;
           
        };
        Mp3Player.prototype.previousTrack = function () {
            if (this._currentTrack == 1) {
                //this.track = 1 ;
            } else this._currentTrack--;
        };

        Mp3Player.prototype.disk = function(disk){
            if (disk ===undefined) {
                return this._disk;
            } else if (Array.isArray(disk)){
                this._disk = disk;
            }
        }

        Mp3Player.prototype.toString = function(){
            return SoundDevice.prototype.toString.call(this) + `, disk name: ${this._diskName}, current track: ${this._currentTrack}`;
        }

//------------------------------------------------------------------------

function TV(brand, power = false, volumeLevel = new Regulator(), currentChannel = new ChannelReciver(TVCHANNELS)){
    SoundDevice.call(this, brand, power = false, volumeLevel = new Regulator() );
    this._currentChannel = currentChannel;
}

TV.prototype = Object.create(SoundDevice.prototype);
TV.prototype.constructor = TV;

TV.prototype.nextChannel= function(){
    this._currentChannel.channelUp();
}

TV.prototype.previousChannel = function(){
    this._currentChannel.channelDown();
}

TV.prototype.setChannel = function(value){
    this._currentChannel.setChannel(value);
}

TV.prototype.getChannelList = function(){
    return this._currentChannel.getChannelList();
}

TV.prototype.toString = function(){
    return SoundDevice.prototype.toString.call(this) + `, current channel: ${this._currentChannel.getChannel()}`
}