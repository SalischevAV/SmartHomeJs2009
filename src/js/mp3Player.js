"use strict";
class Mp3Player extends SoundDevice{
    constructor(brand, diskName, aviableSSID = new Set(), power = false, volumeLevel = new Regulator(), disk = ["track1", "track2", "track3", "track4", "track5"], currentTrack = 1){
        super(brand, power = false, aviableSSID = new Set(),volumeLevel = new Regulator());
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
        return super.toString() + `, disk name: ${this._diskName}, disk length: ${this._disk.length} tracks, current track: ${this._currentTrack}`;
    }

}