/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    const p = new Promise((res, rej) => {
        setTimeout(() => {
            res(t * 1000);
        }, t * 1000);
    });
    return p;
}

function wait2(t) {
    const p = new Promise((res, rej) => {
        setTimeout(() => {
            res(t * 1000);
        }, t * 1000);
    });
    return p;
}

function wait3(t) {
    const p = new Promise((res, rej) => {
        setTimeout(() => {
            res(t * 1000);
        }, t * 1000);
    });
    return p;
}

function calculateTime(t1, t2, t3) {
    const functions = [wait1, wait2, wait3];
    const time = [t1, t2, t3]
    const p = new Promise((res, rej) => {
        let ans = [];
        let j = 0;
        for(let i = 0; i < functions.length; i++) {
            functions[i](time[i]).then((d) => {
                j += 1;
                ans[i] = d;
            }).then(() => {
                if(j === functions.length)
                    res(ans);
            }).catch((e) => {
                rej(e);
            });
        }
        
    });

    return p.then((data) => {
        let sum = 0;
        for(let i = 0; i < data.length; i++) {
            sum += data[i];
        }
        return sum
    });
}

module.exports = calculateTime;
