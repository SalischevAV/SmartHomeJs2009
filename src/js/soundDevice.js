"use strict";
class SoundDevice extends Device{
    constructor(brand, power = false, onlineStatus = false, aviableSSID = new Set(), volumeLevel = new Regulator()){
        super(brand, power = false, onlineStatus = false, aviableSSID = new Set());
        this._volumeLevel = volumeLevel;
    }

    volumeUp() {
        if(this.power){
        this._volumeLevel.currentValueUp();
        } else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    };

    volumeDown() {
        if(this.power){
        this._volumeLevel.currentValueDown();
        }else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    };

    set volume (value){
        if(this.power){
        this._volumeLevel.currentValue = value;
        }else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    }

    get volume(){
        return this._volumeLevel.currentValue;
    }

    toString (){
        return super.toString() + `, volume level: ${this.volume}`;
    }
}