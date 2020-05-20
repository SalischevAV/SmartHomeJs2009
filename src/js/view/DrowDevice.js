"use strict"

class DrowDevice{
    constructor (model, mountPoint){       // model - Device
        this._model = model;
        this._mountPoint = mountPoint;
        this._pToString = null;
        this._radioTimerPowerOn = null;
        this._inputNumberMinutes = null;
        this._timerLbl = null;
        
    } 

    _powerOnRadioClickHandler(){
        return () => {
            this._model.powerOn();
            this._pToString.innerText = this._model.toString();
        }
    }

    _powerOffRadioClickHandler(){
        return () => {
            this._model.powerOff();
            this._pToString.innerText = this._model.toString();
        }
    }

    _powerOnRadioTimerClickHandler(){
        return () =>{
        let time = this._inputNumberMinutes.value * 1;
        this._model.powerTimer(time, true).then((data)=> this._pToString.innerText = this._model.toString());
        setInterval(()=>this._timerLbl.innerText = new Date(), 1000);
        }
    }

    _powerOffRadioTimerClickHandler(){
        return () =>{
        let time = this._inputNumberMinutes.value * 1;
        this._model.powerTimer(time, false).then((data)=> this._pToString.innerText = this._model.toString());
        setInterval(()=>this._timerLbl.innerText = new Date(), 1000);
        }
    }

    renderDevice(){
        //<div class="deviceDiv" id="modelId">
        const divDevice = document.createElement("div");
        divDevice.className = "deviceDiv";
        divDevice.id = this._model.id;

        //<p class="toString">
        this._pToString = document.createElement("p");
        this._pToString.className = "toString";
        this._pToString.innerText = this._model.toString();
        divDevice.appendChild(this._pToString);

        //<p></p>
        const pDecorate1 = document.createElement("p");
        pDecorate1.innerText="PowerOn";
        pDecorate1.className = "decorate p";
        divDevice.appendChild(pDecorate1);

        //radio powerOn
        const radioPowerOn = document.createElement("input");
        radioPowerOn.type = "radio";
        radioPowerOn.name = "power";
        radioPowerOn.value = "true";
        radioPowerOn.addEventListener("click", this._powerOnRadioClickHandler());
        pDecorate1.appendChild(radioPowerOn);

        //<p></p>
        const pDecorate2 = document.createElement("p");
        pDecorate2.innerText="PowerOff";
        pDecorate2.className = "decorateP";
        divDevice.appendChild(pDecorate2);

        //radio powerOf
        const radioPowerOff = document.createElement("input");
        radioPowerOff.type = "radio";
        radioPowerOff.name = "power";
        radioPowerOff.value = "false";
        radioPowerOff.checked="checked";
        radioPowerOff.addEventListener("click", this._powerOffRadioClickHandler())
        pDecorate2.appendChild(radioPowerOff);

        const divTimer = document.createElement("div");
        divTimer.className = "timerDiv";
        divDevice.appendChild(divTimer);

        const pDecorate3 = document.createElement("p");
        pDecorate3.innerText="Timer:";
        pDecorate3.className = "decorateP";
        divTimer.appendChild(pDecorate3);

        this._inputNumberMinutes = document.createElement("input");
        this._inputNumberMinutes.type = "number";
        this._inputNumberMinutes.name = "timerNumber";
        this._inputNumberMinutes.size="3";
        this._inputNumberMinutes.min="1";
        this._inputNumberMinutes.max="10";
        this._inputNumberMinutes.value="1";
        divTimer.appendChild(this._inputNumberMinutes);

        const divDecorate1 = document.createElement("div");
        divDecorate1.className = "decorateDiv";
        divTimer.appendChild(divDecorate1);

        const pDecorate4 = document.createElement("p");
        pDecorate4.innerText="PowerOn";
        pDecorate4.className = "decorateP";
        divDecorate1.appendChild(pDecorate4);

        this._radioTimerPowerOn = document.createElement("input");
        this._radioTimerPowerOn.type = "radio";
        this._radioTimerPowerOn.name = "powerTimer";
        this._radioTimerPowerOn.value = "true";
        this._radioTimerPowerOn.className ="timerRadio";
        this._radioTimerPowerOn.addEventListener("click", this._powerOnRadioTimerClickHandler())
        pDecorate4.appendChild(this._radioTimerPowerOn);

        const pDecorate5 = document.createElement("p");
        pDecorate5.innerText="PowerOff";
        pDecorate5.className = "decorateP";
        divDecorate1.appendChild(pDecorate5);

        const radioTimerPowerOff = document.createElement("input");
        radioTimerPowerOff.type = "radio";
        radioTimerPowerOff.name = "powerTimer";
        radioTimerPowerOff.value = "false";
        radioTimerPowerOff.checked="checked";
        radioTimerPowerOff.className="timerRadio";
        radioTimerPowerOff.addEventListener("click", this._powerOffRadioTimerClickHandler())
        pDecorate5.appendChild(radioTimerPowerOff);

        this._timerLbl = document.createElement("label");
        this._timerLbl.className = "timerLbl";
        this._timerLbl.innerText = "Timer counter";
        divTimer.appendChild(this._timerLbl);













        this._mountPoint.appendChild(divDevice);

    }
}