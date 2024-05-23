document.getElementById("button").addEventListener("click", function () {
    const mainPriceElement = document.getElementById("mainPrice");
    const mainPriceString = mainPriceElement.innerText;
    const mainPrice = parseFloat(mainPriceString);

    const inputDiscount = document.getElementById("inputDiscount");
    const inputDiscountString = inputDiscount.value;
    const inputDiscountNumber = parseFloat(inputDiscountString);

    const netPriceElement = document.getElementById("netPrice");
    const netPriceString = netPriceElement.innerText;
    const netPrice = parseFloat(netPriceString);

    const netTotalDiscountPrice = mainPrice * (inputDiscountNumber / 100);
    const netTotalPrice = mainPrice - netTotalDiscountPrice;
    netPriceElement.innerText = netTotalPrice;

    inputDiscount.value = "";

});