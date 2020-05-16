"use strict";
class Device {
    constructor(brand, power = false) {
        if (Validator.isValueString(brand)) {
            this._brand = brand;
        } else throw new Error(`Brand must be string`);

        if (Validator.isValueBoolean(power)) {
            this._power = power;
        } else throw new Error(`Power must be boolean`);


        this._id = Device.generateID();
    }

    static generateID() {
        return Math.floor(Math.random() * (9000)) + 1000;
    }

    get id() {
        return this._id;
    }

    get brand() {
        return this._brand;
    }
    get power() {
        return this._power;
    }

    powerOn() {
        this._power = true;
    }

    powerOff() {
        this._power = false;
    }



    powerTimer(time, flag) {  //time - interval minutes(int), flag - power on/off (boolean)
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if (flag) {
                    this.powerOn();
                    console.log("вкл");
                } else {
                    this.powerOff();
                    console.log("выкл");
                }
                resolve(this._power);
            }, time)
        }
        )
    }




    toString() {
        return (`ID:${this._id}, ${this.constructor.name}, brandname: \"${this._brand}\", power : ${this.power}, online status: ${this._onlineStatus}`);
    }
}