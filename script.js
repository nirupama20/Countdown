var div = document.createElement("div");
var h1 = document.createElement("h1");


h1.style.cssText = 'text-align:center;font-family:Comic Sans MS;font-size:100px;';
div.style.cssText = 'text-align:center;position: absolute;top: 30%;left: 50%; font-size:100px;';


document.body.appendChild(div);
document.body.appendChild(h1);

var x = 11;

setTimeout(function () {

    div.innerHTML = --x;

    setTimeout(function () {
        div.innerHTML = --x;

        setTimeout(function () {
            div.innerHTML = --x;

            setTimeout(function () {
                div.innerHTML = --x;

                setTimeout(function () {
                    div.innerHTML = --x;

                    setTimeout(function () {
                        div.innerHTML = --x;

                        setTimeout(function () {
                            div.innerHTML = --x;

                            setTimeout(function () {
                                div.innerHTML = --x;

                                setTimeout(function () {
                                    div.innerHTML = --x;

                                    setTimeout(function () {
                                        div.innerHTML = --x;

                                        setTimeout(function () {
                                            div.innerHTML = '';
                                            h1.innerHTML = 'HAPPY BIRTHDAYY';

                                        }, 1000);

                                    }, 1000);

                                }, 1000);

                            }, 1000);

                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);





