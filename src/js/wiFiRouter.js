`use strict`
class WiFiRouter extends Device {
    constructor(brand, power = false, onlineStatus = false, internetConnection = false, sSSID = ``, connectedDevices = new Set()){
        super(brand, power = false, onlineStatus = false);
        this._internetConnection = internetConnection;
        this._sSSID = sSSID;
        this._connectedDevices = connectedDevices;
    }

    setInternetConnection(sSID,  callback){  //call method _addAviableSSID(sSID) from WiFiDevice
        if(this.power){
        
            this._internetConnection = true;
            if(Validator.isValueString(sSID) && (sSID !==``) ){
                this._sSSID = sSID;
                callback(this._sSSID); //wf.setInternetConnection("musik", (data) => mp3.addAviableSSID(data))
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
            this._connectedDevices.add(device);
        }
        }else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    }

    removeDevice(device){
        this._connectedDevices.delete(device);
    }

    checkDevices(){
        setInterval(
            () =>{
                for (let device of this._connectedDevices){
                    if (device.power === false){
                        this._connectedDevices.delete(device);
                    }
                }
            }
            ,1000)
    }

    powerOff(){
        super.powerOff();
        this._connectedDevices.clear();
    }

    toString() {
        return super.toString() + `, internet connection: ${this._internetConnection}`;
     }

}
//mp3.connectToWiFi("musik", (mp3)=>wf.addDevice(mp3))