/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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
        return Math.max(...data);
    });
}

module.exports = calculateTime;
