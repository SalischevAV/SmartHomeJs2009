"use strict"

const LOCATION = ["livingroom","kitchen","bathroom","badroom","hall"]


function Device (brand, location, state = false){

    this.brandAccessor(brand); //this.brand
    this.locationAccessor(location);
    this.state = state;
}

Device.prototype = Object.create(Object.prototype);
Device.prototype.constructor = Device;

Device.prototype.isValueString = function(value){
    if (typeof value == `string`){
        return true;
    } else return false;
}

Device.prototype.brandAccessor = function(brand){
    if (brand === undefined){
        return this.brand;
    }else if (this.isValueString(brand)){
        this.brand = brand;
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
        return this.location;
    } else if ( this.isLocationValid(location)){
        this.location = location;
    } else throw new Error(`Invalid location.`);
}

Device.prototype.powerSwitch = function(){
    this.power = !this.power;
}


