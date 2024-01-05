// app.js

function age() {
  // Capturar os valores dos campos de entrada
  var day = document.getElementById("date");
  var month = document.getElementById("month");
  var year = document.getElementById("year");

  // Limpar resultados anteriores
  clearResults();

  // Verificar se todos os campos foram preenchidos
  if (day.value === "" || month.value === "" || year.value === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Verificar data
  if (day.value > 31) {
    alert('Dia inválido! Por favor insira um dia entre 1 a 31');
    setInvalidInput(day);
    return;
  } else {
    setValidInput(day);
  }

  // Verificar se o mês está no intervalo correto
  if (month.value < 1 || month.value > 12) {
    alert("O mês deve estar no intervalo de 1 a 12.");
    setInvalidInput(month);
    return;
  } else {
    setValidInput(month);
  }

  // Verificar se o ano não é negativo e tem pelo menos 4 dígitos
  if (year.value < 0 || year.value.length < 4) {
    alert("O ano deve ser positivo e ter pelo menos 4 dígitos.");
    setInvalidInput(year);
    return;
  } else {
    setValidInput(year);
  }

  // Criar um objeto de data com os valores fornecidos
  var birthDate = new Date(year.value, month.value - 1, day.value); // O mês é baseado em zero (0 = janeiro, 1 = fevereiro, etc.)

  // Verificar se a data de nascimento é válida
  if (isNaN(birthDate.getTime())) {
    alert("Data de nascimento inválida. Por favor, verifique os valores inseridos.");
    setInvalidInput(day);
    return;
  } else {
    setValidInput(day);
  }

  // Calcular a idade
  var today = new Date();
  var ageInMilliseconds = today - birthDate;
  var ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
  var ageInMonths = Math.floor(ageInYears * 12);
  var ageInDays = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));

  // Exibir os resultados nas caixas abaixo do formulário
  displayResult("Anos: ", ageInYears, "years-container");
  displayResult("Meses: ", ageInMonths, "months-container");
  displayResult("Dias: ", ageInDays, "days-container");
}

function displayResult(label, value, containerId) {
  // Obter o container de resultados
  var resultContainer = document.getElementById(containerId);

  // Criar uma div para exibir o resultado
  var resultBox = document.createElement("div");
  resultBox.className = "result-box mt-4 flex gap-5 bg-[#232323] xl:w-[250px] xl:h-[150px] lg:w-[250px] lg:h-[100px] w-[170px] h-[70px] rounded-md shadow-2xl justify-center items-center font-bold";
  
  // Criar elementos para rótulo e valor
  var labelElement = document.createElement("span");
  labelElement.className = "font-semibold text-lg";
  labelElement.textContent = label;

  var valueElement = document.createElement("span");
  valueElement.className = "text-[#333] dark:text-white";
  valueElement.textContent = value;

  // Adicionar rótulo e valor à div de resultado
  resultBox.appendChild(labelElement);
  resultBox.appendChild(valueElement);

  // Adicionar a div de resultado ao container de resultados
  resultContainer.appendChild(resultBox);
}

function setInvalidInput(inputElement) {
  // Adicionar classe para indicar entrada inválida
  inputElement.classList.add("border-red-500");
}

function setValidInput(inputElement) {
  // Remover classe de entrada inválida
  inputElement.classList.remove("border-red-500");
}

function clearResults() {
  // Limpar resultados anteriores
  document.getElementById("years-container").innerHTML = "";
  document.getElementById("months-container").innerHTML = "";
  document.getElementById("days-container").innerHTML = "";
}
