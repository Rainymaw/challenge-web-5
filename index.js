let money_input = document.querySelector(".amount-collect");
let from_option = document.querySelector("#from");
let to_option = document.querySelector("#to");
let result_p = document.querySelector(".converted-price");

//Check le champ de text pour empécher les caractéres spéciaux
money_input.addEventListener("keypress", function (event) {
  console.log(event.key);
  if (!event.key.match(/[0-9.]/)) {
    this.value = this.value.replace(/[a-zA-Z]/, "");
  }
});
money_input.addEventListener("input", function () {
  this.value = this.value.replace(/[a-zA-Z]/, "");
});

document.querySelector(".convert").addEventListener("click", function () {
  if (money_input.value === "") {
    result_p.classList.remove("hidden");
    result_p.innerText = "Error, you did not input a value to the input";
    return 0;
  }
  if (from_option.value === to_option.value) {
    result_p.classList.remove("hidden");
    result_p.innerText = "error, you chose the same option for currencies";
    return 0;
  }
  let taux_conversion = {
    dzd: {
      usd: 0.0074,
      eur: 0.0068,
    },
    usd: {
      dzd: 134.53,
      eur: 0.92,
    },
    eur: {
      dzd: 146.42,
      usd: 1.09,
    },
  };
  let money_value = Number(money_input.value);
  let result =
    money_value * taux_conversion[from_option.value][to_option.value];

  result_p.classList.remove("hidden");
  result_p.innerText =
    "Converted value : " + result.toFixed(2) + " " + to_option.value;
});

document.querySelector(".reset").addEventListener("click", function () {
  money_input.value = "";
  from_option.value = "dzd";
  to_option.value = "dzd";
  result_p.innerText = "";
  result_p.classList.add("hidden");
});
