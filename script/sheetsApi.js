function loadGoogleSheetData() {
    // ID da planilha do Google Sheets
    const spreadsheetId = '1MsFl6hMKJusPb8m9rXBzmZ5iRVkLNmKg3JsOQPh4Kw4';
    // ID da planilha dentro do documento (geralmente 0 para a primeira planilha)
    const sheetId = 0;
    // Linha inicial para começar a leitura (exemplo: começando da linha 2)
    const startRow = 2;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'ComponentesEletronicos!A' + startRow + ':B' // Substitua 'ComponentesEletronicos' pelo nome da aba e ajuste o intervalo conforme necessário
    }).then(function (response) {
        const data = response.result.values;
        const tableBody = document.querySelector('#actions-table tbody');

        // Limpe qualquer conteúdo existente na tabela
        tableBody.innerHTML = '';

        // Preencha a tabela com os dados da planilha
        data.forEach(function (row) {
            // Extrai apenas os dados das colunas A e B
            const descricao = row[0] || ''; // Coluna A
            const quantidade = row[1] || ''; // Coluna B

            // Cria uma nova linha na tabela e adiciona os dados das colunas A e B
            const tableRow = document.createElement('tr');
            const cellDescricao = document.createElement('td');
            const cellQuantidade = document.createElement('td');

            cellDescricao.textContent = descricao;
            cellQuantidade.textContent = quantidade;

            tableRow.appendChild(cellDescricao);
            tableRow.appendChild(cellQuantidade);

            tableBody.appendChild(tableRow);
        });
    });
}


// Função para inicializar a API do Google Sheets
function initGoogleSheetsApi() {
    gapi.client.init({
        apiKey: 'AIzaSyA258oI7s4zSD-dac2OqwcImJZWRsQKtwA',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        loadGoogleSheetData();
    });
}

// Carrega a API do Google Sheets e inicia a aplicação
gapi.load('client', initGoogleSheetsApi);


