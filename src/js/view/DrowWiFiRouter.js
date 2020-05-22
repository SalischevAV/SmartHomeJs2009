"use strict"

class DrowWiFiRouter extends DrowDevice {
    constructor (model, mountPoint){
        super(model, mountPoint);
        this._divConnectedDevice = null;
    }

    _btnConnectToInternetHahdler(){
        return ()=>{
            let ssid = prompt("Enter SSID to your connection", "");
            this._model.setInternetConnection(ssid, ()=>true);
            this._pToString.innerText = this._model.toString();
        }
    }

    _btnConnectedDevicesHandler(){
        return () => {
            this._divConnectedDevice.classList.toggle("hiddenListDev");
            if(!this._divConnectedDevice.classList.contains("hiddenListDev")){          
            let qwe = new DrowList(this._model.connectedDevices, this._divConnectedDevice);
            qwe.render();
        } else this._divConnectedDevice.innerText = "";
            
        }

    }

    render(){
        super.render();
        
        const btnConnectToInternet = document.createElement("button");
        btnConnectToInternet.type = "button";
        btnConnectToInternet.innerText = "Connect to Internet";
        btnConnectToInternet.addEventListener("click", this._btnConnectToInternetHahdler());
        this._divDevice.appendChild(btnConnectToInternet);

        const btnConnectedDevices = document.createElement("button");
        btnConnectedDevices.type = "button";
        btnConnectedDevices.innerText = "Connected devices";
        btnConnectedDevices.addEventListener("click", this._btnConnectedDevicesHandler());
        this._divDevice.appendChild(btnConnectedDevices);

        this._divConnectedDevice = document.createElement("div");
        this._divConnectedDevice.className = "hiddenListDev";
        this._mountPoint.appendChild(this._divConnectedDevice);





    }
}
