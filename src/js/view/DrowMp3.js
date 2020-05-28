"use strict"

class DrowMp3 extends DrowSoundDevice {
    constructor(model, mountPoint) {
        super(model, mountPoint);
        this._trackListDiv = null;
    }


    _diskInfoBtnClickHandler() {
        return () => {
            //if (this._model.disk != null) {
            this._trackListDiv.classList.toggle("hiddenListDev");
            this._pToString.innerText = this._model.toString();


            // } else {
            //let diskname = prompt("Enter disk name", "MASTEROFPUPPETS");
            //this._model.disk = diskname;
            //console.log(this._model.disk);
            // }

        }
    }

    _nextTrackBtnClickHandler() {
        return (e) => {
            this._model.nextTrack();
            let trackListDiv = e.target.parentElement.previousSibling;
            let pCollection = trackListDiv.children;
            for (let item of pCollection) {
                item.classList.remove("selectedItem");
            }

            for (let item of pCollection) {
                if (item.innerText.includes(this._model.trackName)) {
                    item.classList.add("selectedItem");
                }
            }
            this._pToString.innerText = this._model.toString();
        }
    }

    _previousTrackBtnClickHandler() {
        return (e) => {
            this._model.previousTrack();
            let trackListDiv = e.target.parentElement.previousSibling;
            let pCollection = trackListDiv.children;
            for (let item of pCollection) {
                item.classList.remove("selectedItem");
            }

            for (let item of pCollection) {
                if (item.innerText.includes(this._model.trackName)) {
                    item.classList.add("selectedItem");
                }
            }
            this._pToString.innerText = this._model.toString();
        }
    }

    _trackNameClickHandler() {
        return (e) => {
            if (e.target.tagName == "P") {
                let trackListDiv = e.target.parentElement;
                let pCollection = trackListDiv.children;
                for (let item of pCollection) {
                    item.classList.remove("selectedItem");
                }
                e.target.classList.add("selectedItem");
                let trackString = e.target.innerText;
                let arr = trackString.split(" - ");
                let number = Number(arr[0]); //arr[0] *1
                this._model.track = number;
                this._pToString.innerText = this._model.toString();
            }
        }
    }

    render() {
        super.render();

        const diskDiv = document.createElement("div");
        diskDiv.className = "diskDiv";
        this._divDevice.appendChild(diskDiv);

        const diskInfoBtn = document.createElement("button");
        diskInfoBtn.type = "button";
        diskInfoBtn.innerText = "Load Disk";
        diskInfoBtn.addEventListener("click", this._diskInfoBtnClickHandler());
        this._divDevice.appendChild(diskInfoBtn);

        this._trackListDiv = document.createElement("div");
        this._trackListDiv.className = "hiddenListDev trackListDiv";
        this._divDevice.appendChild(this._trackListDiv);
        this._trackListDiv.addEventListener("click", this._trackNameClickHandler());
        let listRender = new DrowNameList(this._model.disk, this._trackListDiv);
        listRender.render();

        const playerDiv = document.createElement("div");
        playerDiv.className = "playerDiv";
        this._divDevice.appendChild(playerDiv);

        const previousTrackBtn = document.createElement("button");
        previousTrackBtn.type = "button";
        previousTrackBtn.innerText = "<-";
        previousTrackBtn.addEventListener("click", this._previousTrackBtnClickHandler());
        playerDiv.appendChild(previousTrackBtn);

        const playTrackBtn = document.createElement("button");
        playTrackBtn.type = "button";
        playTrackBtn.innerText = ">";
        playerDiv.appendChild(playTrackBtn);

        const nextTrackBtn = document.createElement("button");
        nextTrackBtn.type = "button";
        nextTrackBtn.innerText = "->";
        nextTrackBtn.addEventListener("click", this._nextTrackBtnClickHandler());
        playerDiv.appendChild(nextTrackBtn);



    }
}