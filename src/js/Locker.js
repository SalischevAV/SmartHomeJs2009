"use strict"
class  Locker extends Device{
    constructor(brand, power = false, onlineStatus = false, aviableSSID = new Set(), position = `Close`, aviablePosition = OPENINGPOSITION)  {
        super(brand, power = false, onlineStatus = false, aviableSSID = new Set());
        this._position = position;
        this._aviablePosition =  aviablePosition;
    }

    get position(){
        return this._position;
    }

    set position(position){
        if(this.power){
            if(Validator.isArrayHasValue(position)){
                this._position = position;
            } else throw new Error(`Incorrect position value`)
        } else throw new Error (`${this.constructor.name} error: all manipulation can be only if power on.`)
    }

    

    toString(){
        return super.toString() + `, position: ${this._position}`;
    }
}