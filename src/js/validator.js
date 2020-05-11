"use strict";
class Validator{

    static isValueString(value){
        if (typeof value == `string`){
            return true;
        } else {
            return false;
        }
    }

    static isValueBoolean(value){
        if (typeof value == `boolean`){
            return true;
        } else {
            return false;
        }
    }

    static isValueNumber(value){
        if (typeof value == `number`){
            return true;
        } else {
            return false;
        }
    }

    static isValueArray(value){
        if (Array.isArray(value)){
            return true;
        } else {
            return false;
        }
    }

    static isLocationValid = function(location){
        let flag = false;
        for(let i = 0; i < LOCATION.length; i++){
            if (LOCATION[i] == location){
                flag = true;
                break;
            }
        }
        return flag;
    };

    static isPositionValid = function(position){
        let flag = false;
        for(let i = 0; i < OPENINGPOSITION.length; i++){
            if (OPENINGPOSITION[i] == position){
                flag = true;
                break;
            }
        }
        return flag;
    };

    static isDeviceValid = function(device){
        if(device instanceof Device){
        return true;
        } else return false;

    }
}