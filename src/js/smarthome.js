"use strict"

class SmartHome{
    constructor(locations = LOCATION, aviableDevices = new Map()) {
        this._locations = locations;
        this._aviableDevices = aviableDevices;
        
    }

    addDevice(location, device){
        let verificatedLocation;
        let verificatedDevice;

        if(Validator.isLocationValid(location)){
            verificatedLocation = location;
        } else throw new Error (`Incorrect location`);

        if(Validator.isDeviceValid(device)){
            verificatedDevice = device;
        } else throw new Error (`Incorrect device`);

        if (verificatedLocation &&  verificatedDevice){
            this._aviableDevices.set(verificatedLocation, verificatedDevice)
        }

    }

    findDeviceByDestination(){}

    findDevicesFromLocation(){}

    getAviableDevices(){
        let res = "";
    for (let entry of this._aviableDevices){
        res += entry + `\n`;
    }
    return res;
    }

    allPower(){
        for (let value of this._aviableDevices.values()){
            value.powerOn()
        };
    }

}