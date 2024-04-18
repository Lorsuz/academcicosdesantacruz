import { GoogleSpreadsheet } from 'google-spreadsheet';
import * as fs from 'fs';

const doc = new GoogleSpreadsheet('1elXUlcQVFIkRErtqy-2TXHByqCSwpnLmsDf9rcI52gw');

// Leitura do arquivo de credenciais
const credentials = JSON.parse(fs.readFileSync('./credentials.json', 'utf-8'));

(async () => {
  try {
    // Autenticação manual com as credenciais
    await doc.useRawAccessToken(credentials);

    // Carregar informações sobre a planilha
    await doc.loadInfo();
    console.log('Título da planilha:', doc.title);
    console.log('Número de abas:', doc.sheetCount);
    console.log('Informações detalhadas:', doc);
  } catch (error) {
    console.error('Erro ao carregar informações da planilha:', error);
  }
})();
