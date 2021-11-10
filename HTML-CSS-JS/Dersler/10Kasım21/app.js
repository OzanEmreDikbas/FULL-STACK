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
                result.innerHTML = 'Equilateral';

            } else if (Side1 == Side2 || Side2 == Side3 || Side1 == Side3) {
                result.innerHTML = 'Isosceles';

            } else {
                result.innerHTML = 'Scalene';
            }

        } else {
            result.innerHTML = 'Invalid Triangle; For a shape to be a triangle at all, all sides have to be of length > 0, and the sum of the lengths of any two sides must be greater than the length of the third side.';

        }
    } else {
        result.innerHTML = 'Invalid Triangle; your values can not be \'0\' or negative value!';
    }

})