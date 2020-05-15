"use strict";
class Mp3Player extends SoundDevice{
    constructor(brand, power = false, aviableSSID = new Set(),  volumeLevel = new Regulator(), disk = new List()){
        super(brand, power = false, aviableSSID = new Set(), volumeLevel = new Regulator());
        this._disk = disk;
    }

    get disk(){
        return this._disk.list;
    }

    set disk(disk){
            this._disk.list = disk;
    }

    getTrackList(){
        return this._disk.toString();
    }

    get track() {
        return this._disk.current;
    }

    set track(number){
       this._disk.current = number;
    }   

    nextTrack(){
            this._disk.current++;
    }

    previousTrack(){
        this._disk.current--;
    }

    set trackName(value){
        this._disk.currentName = value;
    }

    get trackName(){
        return this._disk.currentName;
    }

    toString(){
        return super.toString() + `, current track: ${this._disk.currentName}`;
    }

}