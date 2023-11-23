function checkCard() {
   
    let cardNumber = document.getElementById("cardNumber").value;

    cardNumber = cardNumber.replace(/\s/g, '');
    let circuit = "";
    if (/^3[47]\d{13}$/.test(cardNumber)) {
      circuit = "American Express";
    } else if (/^4\d{12}$/.test(cardNumber) || /^4\d{15}$/.test(cardNumber)) {
      circuit = "Visa";
    } else if (/^5[1-5]\d{14}$/.test(cardNumber)) {
      circuit = "MasterCard";
    } else if (/^6011\d{12}$/.test(cardNumber) || /^5[0,6,8,9]\d{14}$/.test(cardNumber)) {
      circuit = "Discover";
    } else if (/^3(0[0-5]|[68]\d)\d{11}$/.test(cardNumber)) {
      circuit = "Diners Club";
    } else if (/^(2131|1800)\d{11}$/.test(cardNumber) || /^35\d{14}$/.test(cardNumber)) {
      circuit = "JCB";
    }
    let sum = 0;
    let double = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i));
      if (double) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      double = !double;
    }
    if (sum % 10 != 0) {
      circuit = "";
    }
    let result = document.getElementById("result");
    if (circuit != "") {
      result.innerHTML = "Il numero di carta inserito è valido e appartiene al circuito " + circuit;
    } else {
      result.innerHTML = "Il numero di carta inserito non è valido o non appartiene a nessun circuito conosciuto";
    }
  }