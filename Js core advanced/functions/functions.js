function doByInterval(fn, interval) {
    return setInterval(fn, interval);
}

const fn = () => {
    console.log(new Date);
}

const intervalId = doByInterval(fn, 1000);

//Для остановки интервала
setTimeout(() => clearInterval(intervalId), 6000);