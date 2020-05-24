"use strict"

class DrowSoundDevice extends DrowInternetDevice{
    constructor(model, mountPoint) {
        super(model, mountPoint);
        this._rangeVolumeLevel = null;
        this._numberVolumeLevel = null;
    }
    


    _rangeVolumeLevelChangeHandler(){
        return () =>{
        this._numberVolumeLevel.value = this._rangeVolumeLevel.value;
        this._model.volume = this._rangeVolumeLevel.value;
        this._pToString.innerText = this._model.toString();
        }
    }

    _numberVolumeLevelChangeHandler(){
        return () =>{
        this._rangeVolumeLevel.value = this._numberVolumeLevel.value;
        this._pToString.innerText = this._model.toString();
        }
    }

render(){
    super.render();

    const soundDiv = document.createElement("div");
    soundDiv.className = "soundDiv";
    this._divDevice.appendChild(soundDiv);
    

    const volumeP = document.createElement("p");
    volumeP.innerText = "Volume";
    soundDiv.appendChild(volumeP);


    this._rangeVolumeLevel = document.createElement("input");
    this._rangeVolumeLevel.type = "range";
    this._rangeVolumeLevel.min = this._model.min;
    this._rangeVolumeLevel.max = this._model.max;
    this._rangeVolumeLevel.addEventListener("input", this._rangeVolumeLevelChangeHandler());
    soundDiv.appendChild(this._rangeVolumeLevel);

    this._numberVolumeLevel = document.createElement("input");
    this._numberVolumeLevel.type = "number";
    this._numberVolumeLevel.min = this._model.min;
    this._numberVolumeLevel.max = this._model.max;
    this._numberVolumeLevel.addEventListener("input", this._numberVolumeLevelChangeHandler());
    soundDiv.appendChild(this._numberVolumeLevel);
}
}