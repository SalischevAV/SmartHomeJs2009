`use strict`

class DrowList {
    constructor(list, mountPoint) {
        this._list = list;
        this._mountPoint = mountPoint;
        this._deviceInfo = null;
    }

    _deviceInfoClickHandler() {
        return (e) => {
            let btn = e.target;
            let p = e.target.previousSibling;
            let idText = e.target.previousSibling.data;
            this._list.forEach(
                (value) => {
                    if (value.id == idText) {
                        this._list.delete(value);
                    }
                }
            )
            p.remove();
            btn.remove();
        }

    }




    render() {
        this._list.forEach(
            (item) => {
                this._deviceInfo = document.createElement("p");
                this._deviceInfo.innerText = item.id;  //toString();
                //this._deviceInfo.addEventListener("click", ()=>console.log("2222"));
                this._mountPoint.appendChild(this._deviceInfo);

                const delBtn = document.createElement("button");
                delBtn.type = "button";
                delBtn.innerText = "-";
                this._deviceInfo.addEventListener("click", this._deviceInfoClickHandler());
                this._deviceInfo.appendChild(delBtn);

            }
        )
    }
}