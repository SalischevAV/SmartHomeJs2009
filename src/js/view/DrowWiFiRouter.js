"use strict"

class DrowWiFiRouter extends DrowDevice {
    constructor(model, mountPoint) {
        super(model, mountPoint);
        this._divConnectedDevice = null;
    }

    _btnConnectToInternetClickHahdler() {
        return () => {
            let ssid = prompt("Enter SSID to your connection", "");
            this._model.setInternetConnection(ssid, () => true);
            this._pToString.innerText = this._model.toString();
        }
    }

    _btnConnectedDevicesClickHandler() {
        return () => {
            this._divConnectedDevice.classList.toggle("hiddenListDev");
            if (!this._divConnectedDevice.classList.contains("hiddenListDev")) {
                let listRender = new DrowList(this._model.connectedDevices, this._divConnectedDevice);
                listRender.render(false);
            } else this._divConnectedDevice.innerText = "";

        }

    }

    render() {
        super.render();

        const btnConnectToInternet = document.createElement("button");
        btnConnectToInternet.type = "button";
        btnConnectToInternet.innerText = "Connect to Internet";
        btnConnectToInternet.addEventListener("click", this._btnConnectToInternetClickHahdler());
        this._divDevice.appendChild(btnConnectToInternet);

        const btnConnectedDevices = document.createElement("button");
        btnConnectedDevices.type = "button";
        btnConnectedDevices.innerText = "Connected devices";
        btnConnectedDevices.addEventListener("click", this._btnConnectedDevicesClickHandler());
        this._divDevice.appendChild(btnConnectedDevices);

        this._divConnectedDevice = document.createElement("div");
        this._divConnectedDevice.className = "hiddenListDev";
        this._mountPoint.appendChild(this._divConnectedDevice);
    }
}
