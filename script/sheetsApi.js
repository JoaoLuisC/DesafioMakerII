function loadGoogleSheetData() {
    // ID da planilha do Google Sheets
    const spreadsheetId = '1UkrKKMGTu2AZw8_2Oz5AEbu2syyS9LoNb3XX_CaUu7Q';
    // ID da planilha dentro do documento (geralmente 0 para a primeira planilha)
    const sheetId = 0;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'ComponentesEletronicos' // Substitua pelo nome da aba que você deseja ler
    }).then(function (response) {
        const data = response.result.values;
        const tableBody = document.querySelector('#itens-table tbody');

        // Limpe qualquer conteúdo existente na tabela
        tableBody.innerHTML = '';

        // Preencha a tabela com os dados da planilha
        data.forEach(function (row) {
            const rowData = row.map(item => item || ''); // Lida com valores nulos ou indefinidos

            const tableRow = document.createElement('tr');
            rowData.forEach(function (cellData) {
                const cell = document.createElement('td');
                cell.textContent = cellData;
                tableRow.appendChild(cell);
            });

            tableBody.appendChild(tableRow);
        });
    });
}

function loadGoogleSheetData2() {
    // ID da planilha do Google Sheets
    const spreadsheetId = '1UkrKKMGTu2AZw8_2Oz5AEbu2syyS9LoNb3XX_CaUu7Q';
    // ID da planilha dentro do documento (geralmente 0 para a primeira planilha)
    const sheetId = 1;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'SensoresAtuadores' // Substitua pelo nome da aba que você deseja ler
    }).then(function (response) {
        const data = response.result.values;
        const tableBody = document.querySelector('#itens-table2 tbody');

        // Limpe qualquer conteúdo existente na tabela
        tableBody.innerHTML = '';

        // Preencha a tabela com os dados da planilha
        data.forEach(function (row) {
            const rowData = row.map(item => item || ''); // Lida com valores nulos ou indefinidos

            const tableRow = document.createElement('tr');
            rowData.forEach(function (cellData) {
                const cell = document.createElement('td');
                cell.textContent = cellData;
                tableRow.appendChild(cell);
            });

            tableBody.appendChild(tableRow);
        });
    });
}

function loadGoogleSheetData3() {
    // ID da planilha do Google Sheets
    const spreadsheetId = '1UkrKKMGTu2AZw8_2Oz5AEbu2syyS9LoNb3XX_CaUu7Q';
    // ID da planilha dentro do documento (geralmente 0 para a primeira planilha)
    const sheetId = 2;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'Placas' // Substitua pelo nome da aba que você deseja ler
    }).then(function (response) {
        const data = response.result.values;
        const tableBody = document.querySelector('#itens-table3 tbody');

        // Limpe qualquer conteúdo existente na tabela
        tableBody.innerHTML = '';

        // Preencha a tabela com os dados da planilha
        data.forEach(function (row) {
            const rowData = row.map(item => item || ''); // Lida com valores nulos ou indefinidos

            const tableRow = document.createElement('tr');
            rowData.forEach(function (cellData) {
                const cell = document.createElement('td');
                cell.textContent = cellData;
                tableRow.appendChild(cell);
            });

            tableBody.appendChild(tableRow);
        });
    });
}

function loadGoogleSheetData4() {
    // ID da planilha do Google Sheets
    const spreadsheetId = '1UkrKKMGTu2AZw8_2Oz5AEbu2syyS9LoNb3XX_CaUu7Q';
    // ID da planilha dentro do documento (geralmente 0 para a primeira planilha)
    const sheetId = 3;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'Equipamentos' // Substitua pelo nome da aba que você deseja ler
    }).then(function (response) {
        const data = response.result.values;
        const tableBody = document.querySelector('#itens-table4 tbody');

        // Limpe qualquer conteúdo existente na tabela
        tableBody.innerHTML = '';

        // Preencha a tabela com os dados da planilha
        data.forEach(function (row) {
            const rowData = row.map(item => item || ''); // Lida com valores nulos ou indefinidos

            const tableRow = document.createElement('tr');
            rowData.forEach(function (cellData) {
                const cell = document.createElement('td');
                cell.textContent = cellData;
                tableRow.appendChild(cell);
            });

            tableBody.appendChild(tableRow);
        });
    });
}


// Função para inicializar a API do Google Sheets
function initGoogleSheetsApi() {
    gapi.client.init({
        apiKey: 'AIzaSyAIzej-oRGxMYU8XjhQKgDQAo0gi1IN_5I',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        loadGoogleSheetData();
        loadGoogleSheetData2();
        loadGoogleSheetData3();
        loadGoogleSheetData4() 
    });
}

// Carrega a API do Google Sheets e inicia a aplicação
gapi.load('client', initGoogleSheetsApi);
