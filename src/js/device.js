"use strict";
class Device{
    constructor(brand, power = false, onlineStatus = false, aviableSSID = new Set()){
        if(Validator.isValueString(brand)){
            this._brand = brand; 
        } else throw new Error(`Brand must be string`);

        if(Validator.isValueBoolean(power)){
        this._power = power;
        } else throw new Error(`Power must be boolean`);

        this._aviableSSID = aviableSSID;
        this._onlineStatus = onlineStatus;
        this._iD = Device.generateID();
    }

    static generateID(){
        return Math.floor(Math.random() * (9000)) + 1000;
    }

    get iD(){
        return this._iD;
    }

    get brand(){
        return this._brand; 
    }
    get power(){
        return this._power;
    }

    powerOn(){
        this._power = true;    
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

    connectToWiFi(sSID){ //will call method addDevice from WiFi
        if(this.power){
        return new Promise((resolve, reject)=>{
            if (this._aviableSSID.has(sSID)){
                this._onlineStatus = true
                resolve(this);
            } else reject (this._onlineStatus = false);

        });
        } else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    }

    timerForPower(time, flag){   //time - interval minutes(int), flag - power on/off (boolean)
        if(Validator.isValueNumber(time) && Validator.isValueBoolean(flag)){         //надо переделать чтобы выбрасывало ошибку по каждому парметру
             if (flag === true) {
                 setTimeout(this.powerOn.bind(this), time*6000);
            } else if (flag ===  false) {
                 setTimeout(this.powerOff.bind(this), time*6000);
             }
         } else throw new Error(`Invalid timer parametr`);
     }

     toString(){
        return (`ID:${this._iD}, ${this.constructor.name}, brandname: \"${this._brand}\", power : ${this.power}, online status: ${this._onlineStatus}`);
    }
}