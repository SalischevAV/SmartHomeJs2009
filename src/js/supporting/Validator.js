"use strict";
class Validator {

    static isValueString(value) {
        if (typeof value == `string`) {
            return true;
        } else {
            return false;
        }
    }

    static isValueBoolean(value) {
        if (typeof value == `boolean`) {
            return true;
        } else {
            return false;
        }
    }

    static isValueNumber(value) {
        if (typeof value == `number`) {
            return true;
        } else {
            return false;
        }
    }

    static isValueArray(value) {
        if (Array.isArray(value)) {
            return true;
        } else {
            return false;
        }
    }

    static isValueMap(value){
        if (value instanceof Map){
            return true;
        } else return false;
    }

    static isArrayHasValue(inputValue, array) {
        let flag = false;
        array.forEach((item) => {
            if (item === inputValue) {
                flag = true;
                return;
            }
        })
        return flag;
    }

    static isDeviceValid (device) {
        if (device instanceof Device) {
            return true;
        } else return false;
    }


    static isListHasValue(inputValue, list) {
        let flag = false;
        for (let value of list.values()) {
            if (inputValue == value) {
                flag = true;
                return flag;
            }
        }
    }



}