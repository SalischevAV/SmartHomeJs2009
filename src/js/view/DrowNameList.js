`use strict`

class DrowNameList {
    constructor(list, mountPoint) {
        this._list = list;
        this._mountPoint = mountPoint;
        this._deviceInfo = null;
    }

    render(){
        this._list.forEach(
            (key, value) =>{
            this._deviceInfo = document.createElement("p");
            this._deviceInfo.innerText = `${value} - ${key}`;
            this._mountPoint.appendChild(this._deviceInfo);
            }
        )
    }
}