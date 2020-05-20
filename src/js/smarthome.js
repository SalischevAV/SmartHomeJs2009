"use strict"

class SmartHome {
    constructor(locations = LOCATION, aviableDevices = new Map()) {
        this._locations = locations;
        this._aviableDevices = aviableDevices;

    }
    get locations() {
        let res = ``;
        return this._locations.map((item) => res + item);
    }

    addDevice(location, device) {
        let verificatedLocation;
        let verificatedDevice;

        if (Validator.isArrayHasValue(location, this._locations)) {
            verificatedLocation = location;
        } else throw new Error(`Incorrect location`);

        if (Validator.isDeviceValid(device)) {
            verificatedDevice = device;
        } else throw new Error(`Incorrect device`);

        if (verificatedLocation && verificatedDevice) {
            this._aviableDevices.set(verificatedDevice, verificatedLocation);
        }

    }
    getDeviceByID(id) {
        for (let device of this._aviableDevices.keys()) {
            if (device.iD === id) {
                return device;
            }
        }
    }
    removeDeviceByID(id) {
        for (let device of this._aviableDevices.keys()) {
            if (device.iD === id) {
                this._aviableDevices.delete(device);
            }
        }
    }

    removeDevice(device) {
        if (Validator.isDeviceValid(device)) {
            for (let dev of this._aviableDevices.keys()) {
                if (dev === device) {
                    this._aviableDevices.delete(device);
                }
            }
        } else throw new Error(`incorrect type of object`)
    }

    searchByLocation(location) {
        let res = [];
        if (Validator.isArrayHasValue(location, this._locations)) {
            this._aviableDevices.forEach((value, key) => {
                if (value === location) {
                    res.push(key);
                }
            })
            return res;
        } else throw new Error(`Invalid location name`);

    }

    searchByClassName(name) {
        let res = [];
        this._aviableDevices.forEach((value, key) => {
            if (key.constructor.name == name) {
                res.push(key);
            }
        });
        return res;
    }

    massPowerOn(arrayOfDevices, time) {
        if (Validator.isValueArray(arrayOfDevices)) {
            for (let device of arrayOfDevices) {
                device.powerTimer(time, true);
            }
        } else throw new Error(`Invalid parametr. Must be array of Devices`)
    }

    massPowerOff(arrayOfDevices, time) {
        if (Validator.isValueArray(arrayOfDevices)) {
            for (let device of arrayOfDevices) {
                device.powerTimer(time, false);
            }
        } else throw new Error(`Invalid parametr. Must be array of Devices`)
    }


    toString() {
        let res = "";
        this._aviableDevices.forEach((value, key) => res += `Location: ${key}. Device: ${value}` + `\n`);
        return res;
    }

}