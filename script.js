"use strict"


function Device (brand, power = false){
   
    this._brand = brand; //проверки на валидность будем делать в фабрике
    this._power = power; // или нет, а как же сингл респонсибл     
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

Device.prototype.timerForPower = function(time, flag){   //time - interval minutes(int), flag - power on/off (boolean)
   if(typeof time == `number` && typeof flag == `boolean`){         //надо переделать чтобы выбрасывало ошибку по каждому парметру
        if (flag === true) {
            setTimeout(this.powerOn.bind(this), time*6000);
       } else if (flag ===  false) {
            setTimeout(this.powerOff.bind(this), time*6000);
        }
    } else throw new Error(`Invalid timer parametr`);
}

Device.prototype.toString = function(){
    return (`${this.constructor.name}, brandname: ${this._brand}, power : ${this.getPower()}`);
}


//--------------------------------------------------------------------------------------------------------------------------

function SoundDevice (brand, power = false, volumeLevel = 0){ //абстрактній класс
    Device.call(this,brand, power = false);
    this._volumeLevel = volumeLevel;
}

SoundDevice.prototype = Object.create(Device.prototype);
SoundDevice.prototype.constructor = SoundDevice;

SoundDevice.prototype.toString = function(){
    return Device.prototype.toString.call(this) + `, volume level: ${this._volumeLevel}`;
}

SoundDevice.prototype.volumeUp = function () {
    ++this._volumeLevel;
};

SoundDevice.prototype.volumeDown = function () {
    if (this._volumeLevel == 0) {

    } else --this._volumeLevel;
};


SoundDevice.prototype.volume = function(volumeLevel){
    if (volumeLevel === undefined){
        return this._volumeLevel;
    } else {
         if (this._volumelevelIsValid(volumeLevel)){
        this._volumeLevel = volumeLevel;
        }
    }
    }

    SoundDevice.prototype._volumelevelIsValid = function(volumeLevel){
        if(0 <= volumeLevel && 100 >= volumeLevel){
            return true;
        } else {
            return false;
        }
    };

    
    //--------------------------------------------------------------

    function Mp3Player(brand, diskName, power = false, volumeLevel = 0, disk = ["track1", "track2", "track3", "track4", "track5"], currentTrack = 1) {        
        SoundDevice.call(this, brand, power = false, volumeLevel = 0);
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
            if (0 < number && number < this._disk.length);
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

        Mp3Player.prototype.toString = function(){
            return SoundDevice.prototype.toString.call(this) + `, disk name: ${this._diskName}, current track: ${this._currentTrack}`;
        }