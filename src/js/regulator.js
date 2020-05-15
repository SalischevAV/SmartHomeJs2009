"use strict";
class Regulator {
    constructor(min =0, max = 100, current = 0){
        this._min = min;
        this._max = max;
        this._current = current;
    }


    get min(){
        return this._min;
    }

    get max(){
        return this.__max;
    }

    set current(value){
        if (Validator.isValueNumber(value) && value <= this.__max && value >= this.__min){
            this._current = value;
        }  
    }

    get current(){
        return this._current;
    }

    increase(){
        if (this._current < this._max){
             this._current++;
            }
    }

    decrease(){
        if (this._current > this._min){
           this._current--;}
    }
}