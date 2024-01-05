// app.js

function age() {
  // Capturar os valores dos campos de entrada
  var day = document.getElementById("date").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;

  // Verificar se todos os campos foram preenchidos
  if (day === "" || month === "" || year === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Verificar se o mês está no intervalo correto
  if (month < 1 || month > 12) {
    alert("O mês deve estar no intervalo de 1 a 12.");
    return;
  }

  // Verificar se o ano não é negativo
  if (year < 0) {
    alert("O ano não pode ser negativo.");
    return;
  }

  // Criar um objeto de data com os valores fornecidos
  var birthDate = new Date(year, month - 1, day); // O mês é baseado em zero (0 = janeiro, 1 = fevereiro, etc.)

  // Verificar se a data de nascimento é válida
  if (isNaN(birthDate.getTime())) {
    alert("Data de nascimento inválida. Por favor, verifique os valores inseridos.");
    return;
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
  resultBox.className = "result-box mt-4 flex flex-wrap gap-5 bg-[#232323] w-[250px] h-[150px] rounded-md shadow-2xl justify-center items-center";
  
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
