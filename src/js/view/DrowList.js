`use strict`

class DrowList{
    constructor (list, mountPoint){
        this._list = list;
        this._mountPoint = mountPoint;
    }

    render(){
        this._list.forEach(
            (item) =>{
                const deviceInfo = document.createElement("p");
                deviceInfo.innerText = item.toString();
                this._mountPoint.appendChild(deviceInfo);
            }
        )
    }
}