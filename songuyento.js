let sont=document.getElementById('num');

function check() {
    let n = sont.value;
    let flag = true;

    if (n < 2) {
        flag = false;
    } else if (n == 2) {
        flag = true;
    } else if (n % 2 == 0) {
        flag = false
    } else {
        for (let i = 1; i < n - 1; i++) {
            if (n % i == 0) {
                flag = false;
            } else {
                flag = true;
            }
        }
    }
    if (flag == true) {
        document.getElementById('result').innerHTML = n + ' là số nguyên tố'
    } else {
        document.getElementById('result').innerHTML = n + ' không là số nguyên tố'
    }
}

