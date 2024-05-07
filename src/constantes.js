const HORAS_POR_FUNCIONALIDADE = {
  setup: 8,
  formulario: 16,
  responsividade: 16,
  otimizacao_seo: 16,
  construcao_1_pagina: 8,
  integracao_mailchimp: 16,
  ssr: 8,
  integracao_api_propria: 16,
};
const MAX_HORAS_POR_PACOTE = {
  pacote_basico: 50,
  pacote_intermediario: 100,
  pacote_premium: 200,
};
const TAXAS_CONTRATUAIS_POR_PACOTE = {
  pacote_basico: 1.1, // 10%
  pacote_intermediario: 1.2, // 12%
  pacote_premium: 1.5, // 15%
};
module.exports = {
  HORAS_POR_FUNCIONALIDADE,
  MAX_HORAS_POR_PACOTE,
  TAXAS_CONTRATUAIS_POR_PACOTE,
};
