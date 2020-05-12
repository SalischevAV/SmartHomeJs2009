"use strict"

class SmartHome {
    constructor(locations = LOCATION, aviableDevices = new Map()) {
        this.__locations = locations;
        this.__aviableDevices = aviableDevices;

    }
    get locations(){
        let res = ``;
        return this.__locations.map((item) => res+item);
    }

    addDevice(location, device) {
        let verificatedLocation;
        let verificatedDevice;

        if (Validator.isLocationValid(location)) {
            verificatedLocation = location;
        } else throw new Error(`Incorrect location`);

        if (Validator.isDeviceValid(device)) {
            verificatedDevice = device;
        } else throw new Error(`Incorrect device`);

        if (verificatedLocation && verificatedDevice) {
            this.__aviableDevices.set(verificatedDevice, verificatedLocation);
        }

    }
    getDeviceByID(id) {
        for (let device of this.__aviableDevices.keys()) {
            if (device.iD === id) {
                return device;
            }
        }
    }
    removeDeviceByID(id) {
        for (let device of this.__aviableDevices.keys()) {
            if (device.iD === id) {
                this.__aviableDevices.delete(device);
            }
        }
    }

    removeDevice(device) {
        if (Validator.isDeviceValid(device)) {
            for (let dev of this.__aviableDevices.keys()) {
                if (dev === device) {
                    this.__aviableDevices.delete(device);
                }
            }
        } else throw new Error(`incorrect type of object`)
    }

    searchByLocation(location){
        let res = [];
        if(Validator.isLocationValid(location)){
           this.__aviableDevices.forEach((value,key) =>{
               if(value == location){
                   res.push(key);
               }
           })
           return res;
        } else throw new Error(`Invalid location name`);
        
    }

    searchByClassName(name){
        let res = [];      
           this.__aviableDevices.forEach((value,key) =>{
               if(key.constructor.name == name){
                   res.push(key)
                }
            });
        return res;
    }


    toString() {
        let res = "";
        this.__aviableDevices.forEach ((value, key) => res += value + `+++` + key + `\n`);
        
        return res;
    }

    allPower() {
        for (let value of this.__aviableDevices.values()) {
            value.powerOn()
        };
    }

}