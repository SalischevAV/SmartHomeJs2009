//Работу с локацией вынесем в класс Умного дома.

const LOCATION = ["livingroom","kitchen","bathroom","badroom","hall"]

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

//--------------------------------------
function Validator(){

}
Validator.prototype.isValueString = function(value){
    if (typeof value == `string`){
        return true;
    } else return false;
}

Validator.prototype.isValueBool = function(value){
    if (typeof value == `boolean`){
        return true;
    } else return false;
}

Validator.prototype.isValueNumber = function(value){
    if (typeof value == `number`){
        return true;
    } else return false;
}
//--