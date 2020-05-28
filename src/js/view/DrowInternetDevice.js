"use strict"

class DrowInternetDevice extends DrowDevice {
    constructor (model, mountPoint){
        super(model, mountPoint);
    }

    

    _btnConnectClickHandler() {
        return () => {
            this._divConnectedDevice.classList.toggle("hiddenListDev");
            if (!this._divConnectedDevice.classList.contains("hiddenListDev")) {
                let listRender = new DrowList(this._model.aviableSSID, this._divConnectedDevice);
                listRender.render(true);
            } else this._divConnectedDevice.innerText = "";

        }

    }

    _divConnectedDeviceClickHandler(){
        return (e) => {
            if (e.target.tagName == "BUTTON"){
                let currentSSID = e.target.previousSibling.data;
                this._model.connectToWiFi(currentSSID, () =>{});
                this._pToString.innerText = this._model.toString();
            }
        }
    }

    render(){
        super.render();

        const btnConnect = document.createElement("button");
        btnConnect.type = "button";
        btnConnect.innerText = "Connect to WiFi";
        btnConnect.addEventListener("click", this._btnConnectClickHandler());
        this._divDevice.appendChild(btnConnect);

        this._divConnectedDevice = document.createElement("div");
        this._divConnectedDevice.className = "hiddenListDev connectedDevDiv";
        this._divConnectedDevice.addEventListener("click", this._divConnectedDeviceClickHandler());
        this._mountPoint.appendChild(this._divConnectedDevice);

    }
}
