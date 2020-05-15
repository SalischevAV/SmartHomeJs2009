`use strict`
class WiFiRouter extends WiFiDevice {
    constructor(brand, power = false, onlineStatus = false, aviableSSID = new Set(), internetConnection = false, sSSID = ``, connectedDevices = new Set()){
        super(brand, power = false, onlineStatus = false, aviableSSID = new Set());
        this._internetConnection = internetConnection;
        this._sSSID = sSSID;
        this._connectedDevices = connectedDevices;
        this._aviableSSID = null;
    }

    setInternetConnection(sSID,  callback){  
        if(this.power){
        
            this._internetConnection = true;
            if(Validator.isValueString(sSID) && (sSID !==``) ){
                callback(this._sSSID = sSID); //will call method addAviableSSID;
            } else  throw new Error(`SSID must be not null string`);
        
        }else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    }

    get internetConnection(){
        return this._internetConnection;
    }

    get connectedDevices(){
        return this._connectedDevices;
    }

    addDevice(device){  //will be called by connectToWiFi from WiFiDevice
        if(this.power){
        if(this._internetConnection){
            this.connectedDevices.add(device);
        }
        }else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    }

    powerOff(){
        super.powerOff();
        this._connectedDevices.clear();
    }

    connectToWiFi(sSID){} //connect to himself!!!


    toString() {
        return super.toString() + `, internet connection: ${this._internetConnection}`;
     }

}

