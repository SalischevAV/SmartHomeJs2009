"use strict"
//direct count or  countdown

class Timer {

    static counter(flag, time) {
        let count;
        
            if (flag == false) {
                function* cnt(time) {
                    for (let i = time; i >= 0; i--) {
                        yield i;
                    }
                } return cnt(time);
            } else {
                function* cnt(time) {
                    for (let i = 1; i <= time; i++) {
                        yield i;
                    }
                }
                return cnt(time);
            }
        
    }
}