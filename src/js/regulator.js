"use strict";
class Regulator {
    constructor(min =0, max = 100, currentValue = 0){
        this.__min = min;
        this.__max = max;
        this.__currentValue = currentValue;
    }

    getMinMax(){
        return [this.__min, this.__max];
    }

    set currentValue(value){
        if (Validator.isValueNumber(value) && value <= this.__max && value >= this.__min){
            this.__currentValue = value;
        }  
    }

    get currentValue(){
        return this.__currentValue;
    }

    currentValueUp(){
        if (this.__currentValue == this.__max){}
            else{ this.__currentValue++;}
    }

    currentValueDown(){
        if (this.__currentValue == this.__min){}
            else{ this.__currentValue--;}
    }
}