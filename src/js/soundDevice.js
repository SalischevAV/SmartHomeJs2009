"use strict";
class SoundDevice extends Device{
    constructor(brand, power = false, onlineStatus = false, aviableSSID = new Set(), volumeLevel = new Regulator()){
        super(brand, power = false, onlineStatus = false, aviableSSID = new Set());
        this._volumeLevel = volumeLevel;
    }

    volumeUp() {
        if(this.power){
        this._volumeLevel.increase();
        } else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    };

    volumeDown() {
        if(this.power){
        this._volumeLevel.decrease();
        }else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    };

    set volume (value){
        if(this.power){
        this._volumeLevel.current = value;
        }else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    }

    get volume(){
        return this._volumeLevel.current;
    }

    toString (){
        return super.toString() + `, volume level: ${this.volume}`;
    }
}