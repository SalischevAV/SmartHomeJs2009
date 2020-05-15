"use strict"

class WiFiDevice extends Device{
    constructor(brand, power = false, onlineStatus = false, aviableSSID = new Set()){
        super(brand, power = false);
        this._aviableSSID = aviableSSID;
        this._onlineStatus = onlineStatus;
    }


    powerOff(){
        this._power = false; 
        this._aviableSSID.size = 0;
    }

    _addAviableSSID(sSID){  //is called by method setInternetConnection(sSID) from WiFI
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

    connectToWiFi(sSID, callback){ 
        if(this.power){
            if (this._aviableSSID.has(sSID)){
                this._onlineStatus = true;
               callback(this);//will call method addDevice from WiFirouter
            } else return (`unexisted ssid`);

    
        } else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    }
}