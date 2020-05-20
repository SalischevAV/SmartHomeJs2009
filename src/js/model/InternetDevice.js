"use strict"

class InternetDevice extends Device{
    constructor(brand, power = false, onlineStatus = false, aviableSSID = new Set()){
        super(brand, power = false);
        this._aviableSSID = aviableSSID;
        this._onlineStatus = onlineStatus;
    }


    powerOff(){
        this._power = false; 
        this._aviableSSID.clear();
    }

    addAviableSSID(sSID){  //is called by method setInternetConnection(sSID) from WiFI
        if(this.power){
        this._aviableSSID.add(sSID)
        } else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    }

    get aviableSSID(){
        return this._aviableSSID;
    }

    get onlineStatus(){
        return this._onlineStatus;
    }

    connectToWiFi(sSID, callback){ //will call method addDevice from WiFirouter
        if(this.power){
            if (this._aviableSSID.has(sSID)){
                this._onlineStatus = true;
               callback(this);//mp3.connectToWiFi("musik", (mp3)=>wf.addDevice(mp3))
            } else return (`unexisted ssid`);

    
        } else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    }
}

//wf.setInternetConnection("musik", (data) => mp3.addAviableSSID(data))