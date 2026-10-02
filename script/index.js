const cardapioSemanal = {
  periodo: "21 a 25 de Setembro",
  dias: {
    segunda: {
      pratoPrincipal: "Strogonoff de Frango",
      opcao2: "Bife Grelhado",
      guarnicao: "Batata palha, arroz branco e feijão preto",
      saladas: "Alface, tomate e cenoura ralada",
      sobremesa: "Gelatina de morango ou fruta da época",
      suco: "Maracujá / Caju",
    },
    terca: {
      pratoPrincipal: "Carne Assada ao Molho Ferrugem",
      opcao2: "Filé de Frango Grelhado",
      guarnicao: "Purê de batatas, arroz e feijão preto",
      saladas: "Mix de folhas verdes com pepino e tomate",
      sobremesa: "Pudim tradicional ou fruta",
      suco: "Uva / Abacaxi",
    },
    quarta: {
      pratoPrincipal: "Feijoada Completa",
      opcao2: "Peito de Frango com Legumes",
      guarnicao: "Farofa de alho, couve refogada, laranja e arroz",
      saladas: "Salada tropical com manga e acelga",
      sobremesa: "Doce de leite pastoso ou laranja fatiada",
      suco: "Laranja / Limão",
    },
    quinta: {
      pratoPrincipal: "Lasanha à Bolonhesa",
      opcao2: "Sobrecoxa de Frango Assada",
      guarnicao: "Batatas coradas com alecrim e arroz branco",
      saladas: "Salada caesar com croutons",
      sobremesa: "Mousse de limão ou fruta",
      suco: "Goiaba / Caju",
    },
    sexta: {
      pratoPrincipal: "Churrasquinho de Panela",
      opcao2: "Isca de Peixe Empanada com Tártaro",
      guarnicao: "Macarrão alho e óleo, feijão tropeiro e farofa",
      saladas: "Salada de batata com maionese caseira",
      sobremesa: "Melancia fresca fatiada",
      suco: "Manga / Maracujá",
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const displayArea = document.getElementById("menu-display-area");
  const tabButtons = document.querySelectorAll(".tab-button");
  const periodLabel = document.getElementById("menu-period-text");

  if (periodLabel && cardapioSemanal.periodo) {
    periodLabel.textContent = cardapioSemanal.periodo;
  }

  function renderMenuDay(dayKey) {
    const dados = cardapioSemanal.dias[dayKey];
    if (!dados || !displayArea) return;
  }
  displayArea.innerHTML = `
      <div class="plates-grid">
        <!-- Prato Principal em Evidência -->
        <section class="card-main-plate">
          <div>
            <span class="tag-highlight">
              <i class="ph ph-fire"></i> Destaque do Almoço
            </span>
            <h4>${dados.pratoPrincipal}</h4>
            <p class="option-sec"><strong>2ª Opção:</strong> ${dados.opcao2}</p>
          </div>
          <div class="option-sec" style="margin-top: 16px;">
            <strong>Refresco do Dia:</strong> ${dados.suco}
          </div>
        </section>

        <!-- Acompanhamentos, Saladas e Sobremesa -->
        <section class="side-items-list">
          <div class="side-item-card">
            <h5><i class="ph ph-cooking-pot"></i> Guarnições</h5>
            <p>${dados.guarnicao}</p>
          </div>
          <div class="side-item-card">
            <h5><i class="ph ph-leaf"></i> Saladas</h5>
            <p>${dados.saladas}</p>
          </div>
          <div class="side-item-card">
            <h5><i class="ph ph-cake"></i> Sobremesa</h5>
            <p>${dados.sobremesa}</p>
          </div>
        </section>
      </div>
    `;

  function switchTab(dayKey) {
    tabButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.day === dayKey);
    });
    renderMenuDay(dayKey);
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedDay = button.dataset.day;
      switchTab(selectedDay);
    });
  });

  const mapDiasSemana = [
    "domingo",
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
  ];
  const indiceHoje = new Date().getDay();

  const diaInicial =
    indiceHoje >= 1 && indiceHoje <= 5 ? mapDiasSemana[indiceHoje] : "segunda";

  switchTab(diaInicial);
});
