"use strict"

const LOCATION = ["livingroom","kitchen","bathroom","badroom","hall"]


function Device (brand, location, power = false){

    this.brandAccessor(brand); //this.brand
    this.locationAccessor(location);
    this._power = power;
}

Device.prototype.isValueString = function(value){
    if (typeof value == `string`){
        return true;
    } else return false;
}

Device.prototype.brandAccessor = function(brand){
    if (brand === undefined){
        return this._brand_;
    }else if (this.isValueString(brand)){
        this._brand = brand;
        return this._brand;
    } else throw new Error(`Invalid brand name.`);
}

Device.prototype.isLocationValid = function(location){
    let flag = false;
    for(let i = 0; i < LOCATION.length; i++){
        if (LOCATION[i] == location){
            flag = true;
            break;
        }
    }
    return flag;
};

Device.prototype.locationAccessor = function(location){
    if (location === undefined){
        return this._location;
    } else if ( this.isLocationValid(location)){
        this._location = location;
        return this._location;
    } else throw new Error(`Invalid location.`);
}

Device.prototype.powerOn = function(){
    this._power = true;    
}

Device.prototype.powerOff = function(){
    this._power = false;    
}

Device.prototype.getPower = function(){
    return this._power;
}

Device.prototype.timerForPower = function(time, flag){   //time - interval minutes(int), flag - power on/off (boolean)
   if(typeof time == `number` && typeof flag == `boolean`){         //надо переделать чтобы выбрасывало ошибку по каждому парметру
        if (flag === true) {
            setTimeout(this.powerOn.bind(this), 7000);
       } else if (flag ===  false) {
            setTimeout(this.powerOff.bind(this), 7000);
        }
    } else throw new Error(`Invalid timer parametr`);
}
