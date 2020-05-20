"use strict";
class List {
    //channelList = new Map(), currentChannel=[0, ""]
    constructor(list = new Map(), current = 0, currentName = ``) {
        this._list = list;
        this._current = current;
        this._currentName = currentName;
    }

    set list(value) {
        if (Validator.isValueMap(value)) {
            this._list = value;
        }
    }

    get list(){
        return this._list;
    }

    set current(value) {
        if (Validator.isValueNumber(value) && value >= 0 && value <= (this._list.size)) {
            this._current = value;
            this._currentName = this._list.get(this._current);
        }
    }

    get current() {
        return this._current;
    }

    set currentName(inputValue) {
        if (Validator.isListHasValue(inputValue, this._list)) {
            this._currentName = inputValue;
            this._list.forEach((value, key) => {
                if (value == inputValue) {
                    this._current = key;
                }
            })
        }
    }

    get currentName() {
        return this._currentName;
    }

    increase() {
        if (this._current < this._list.size) {
            this._current++;
            this._currentName = this._list.get(this._current);
        }
    }

    decrease() {
        if (this._current > 0) {
            this._current--;
            this._currentName = this._list.get(this._current);
        }
    }


    toString() {
        let res = "";
        this._list.forEach((value, key) => res += `Value: ${key} - ${value}` + `\n`);
        return res;
    }


} 