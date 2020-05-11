`use strict`
class wiFiRouter extends Device {
    constructor(brand, power = false, onlineStatus = false, aviableSSID = new Set(), internetConnection = false, sSSID = ``, connectedDevices = new Set()){
        super(brand, power = false, onlineStatus = false, aviableSSID = new Set(),);
        this._internetConnection = internetConnection;
        this._sSSID = sSSID;
        this._connectedDevices = connectedDevices;
        this._aviableSSID = null;
    }

    setInternetConnection(sSID){  //will call method addAviableSSID;
        if(this.power){
        return new Promise((resolve, reject) =>{
            this._internetConnection = true;
            if(Validator.isValueString(sSID) && (sSID !==``) ){
                resolve(this._sSSID = sSID);
            } else reject(new Error(`SSID must be not null string`));
        })
        }else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    }

    get internetConnection(){
        return this._internetConnection;
    }

    get connectedDevices(){
        return this._connectedDevices;
    }

    addDevice(device){  //will be called by promise from device
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

    connectToWiFi(sSID){}


    toString() {
        return super.toString() + `, internet connection: ${this._internetConnection}`;
     }

}

