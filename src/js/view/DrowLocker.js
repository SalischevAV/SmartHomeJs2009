"use strict"

class DrowLocker extends DrowInternetDevice{
    constructor (model, mountPoint){
        super(model, mountPoint);
    }

    _blockerTimerBtnClickHandler(){
        return (e) =>{
        e.target.nextSibling.classList.toggle("hiddenListDev");
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
        blockerTimerDiv.innerText = "a,fjhdb mdsgfb v";
        this._divDevice.appendChild(blockerTimerDiv);

        

    }
}