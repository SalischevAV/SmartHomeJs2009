`use strict`

class DrowList {
    constructor(list, mountPoint) {
        this._list = list;
        this._mountPoint = mountPoint;
        this._deviceInfo = null;
        this._externalHandler = null;
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

    set externalHandler(handler) {
        this._externalHandler = handler;
    }



    render(flag) {
        this._list.forEach(
            (item) => {
                this._deviceInfo = document.createElement("p");
                this._mountPoint.appendChild(this._deviceInfo);
                const manipulateBtn = document.createElement("button");
                manipulateBtn.type = "button";

                if (flag == false) {
                    this._deviceInfo.innerText = item.id;
                    manipulateBtn.innerText = "-";
                    this._deviceInfo.addEventListener("click", this._deviceInfoClickHandler(flag));
                } else {
                    this._deviceInfo.innerText = item;
                    manipulateBtn.innerText = "+";
                    //this._deviceInfo.addEventListener("click", this._externalHandler());
                }

                this._deviceInfo.appendChild(manipulateBtn);

            }
        )
    }
}