//const { async } = require("regenerator-runtime");

function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sou a promise");
            resolve();
        }, 2000);
    });
}


export default async function (){
    await promise();
    console.log("Terminei a promise");
}