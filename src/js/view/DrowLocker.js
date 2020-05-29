"use strict"

class DrowLocker extends DrowInternetDevice{
    constructor (model, mountPoint){
        super(model, mountPoint);
        this._inputLockNumberMinutes = null;
        this._lockTimerLbl = null;
    }

    _blockerTimerBtnClickHandler(){
        return (e) =>{
        e.target.nextSibling.classList.toggle("hiddenListDev");
        }
    }

    _lockPositionRadioClickHandler(){
        return (e)=>{
            let time = Number(this._inputLockNumberMinutes.value);
            if(e.target.tagName == "INPUT"){
                switch(e.target.value){
                    case "close":
                        this._model.setPosition("Close",time).then((data)=> this._pToString.innerText = this._model.toString());  
                    break;
                    case "half":
                        this._model.setPosition("Half",time).then((data)=> this._pToString.innerText = this._model.toString());  
                    break;
                    case "open":
                        this._model.setPosition("Open",time).then((data)=> this._pToString.innerText = this._model.toString());  
                    break;
                }
            }
            let timerCountFunction = setInterval(() =>{
                let time2 = time --;
                this._lockTimerLbl.innerText = time;
                if (this._lockTimerLbl.innerText == "0"){
                    clearInterval(timerCountFunction);
                }
            }, 1000); 
            

            

        }
    }

    render(){
        super.render();

        const blockerTimerBtn = document.createElement("button");
        blockerTimerBtn.innerText="Blocker timer";
        blockerTimerBtn.className = "";
        blockerTimerBtn.addEventListener("click", this._blockerTimerBtnClickHandler());
        this._divDevice.appendChild(blockerTimerBtn);

        const blockerTimerDiv = document.createElement("div");
        blockerTimerDiv.classList.add("hiddenListDev");
        blockerTimerDiv.addEventListener("click", this._lockPositionRadioClickHandler());
        this._divDevice.appendChild(blockerTimerDiv);

        const pDecorateClose = document.createElement("p");
        pDecorateClose.innerText="Close";
        pDecorateClose.className = "decoratep";
        blockerTimerDiv.appendChild(pDecorateClose);

        const radioClose = document.createElement("input");
        radioClose.type = "radio";
        radioClose.name = "position";
        radioClose.value = "close";
        //radioPowerOn.addEventListener("click", this._powerOnRadioClickHandler());
        pDecorateClose.appendChild(radioClose);

        const pDecorateHalf = document.createElement("p");
        pDecorateHalf.innerText="Half";
        pDecorateHalf.className = "decoratep";
        blockerTimerDiv.appendChild(pDecorateHalf);

        const radioHalf = document.createElement("input");
        radioHalf.type = "radio";
        radioHalf.name = "position";
        radioHalf.value = "half";
        //radioPowerOn.addEventListener("click", this._powerOnRadioClickHandler());
        pDecorateHalf.appendChild(radioHalf);

        const pDecorateOpen = document.createElement("p");
        pDecorateOpen.innerText="Open";
        pDecorateOpen.className = "decoratep";
        blockerTimerDiv.appendChild(pDecorateOpen);

        const radioOpen = document.createElement("input");
        radioOpen.type = "radio";
        radioOpen.name = "position";
        radioOpen.value = "open";
        //radioPowerOn.addEventListener("click", this._powerOnRadioClickHandler());
        pDecorateOpen.appendChild(radioOpen);

        this._inputLockNumberMinutes = document.createElement("input");
        this._inputLockNumberMinutes.type = "number";
        this._inputLockNumberMinutes.name = "timerNumber";
        this._inputLockNumberMinutes.size="2";
        this._inputLockNumberMinutes.min="1";
        this._inputLockNumberMinutes.max="10";
        this._inputLockNumberMinutes.value="1";
        blockerTimerDiv.appendChild(this._inputLockNumberMinutes);

        this._lockTimerLbl = document.createElement("label");
        this._lockTimerLbl.className = "timerLbl";
        this._lockTimerLbl.innerText = "Block counter";
        blockerTimerDiv.appendChild(this._lockTimerLbl);

    }
}