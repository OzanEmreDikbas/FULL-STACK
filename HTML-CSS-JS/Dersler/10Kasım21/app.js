const firstSide = document.querySelector("#input1");
const secondSide = document.querySelector("#input2");
const thirdSide = document.querySelector("#input3");
const button = document.querySelector("#button-addon2");
const result = document.querySelector("#result");



button.addEventListener('click', () => {
    Side1 = +(firstSide.value);
    Side2 = +(secondSide.value);
    Side3 = +(thirdSide.value);

    if (Side1 > 0 && Side2 > 0 && Side3 > 0) {
        if ((Side1 + Side2 > Side3) &&
            (Side1 + Side3 > Side2) &&
            (Side2 + Side3 > Side1)) {

            if (Side1 == Side2 && Side2 == Side3 && Side1 == Side3) {
                result.innerHTML = 'Your Triengle is : Equilateral';

            } else if (Side1 == Side2 || Side2 == Side3 || Side1 == Side3) {
                result.innerHTML = 'Your Triengle is : Isosceles';

            } else {
                result.innerHTML = 'Your Triengle is : Scalene';
            }

        } else {
            result.innerHTML = 'Invalid Triangle; \nThe sum of the lengths of any two sides must be greater than the length of the third side.';

        }
    } else {
        result.innerHTML = 'Invalid Triangle; your values can not be \'0\' or negative value!';
    }

})