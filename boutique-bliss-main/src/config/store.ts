/**
 * Configuração central da loja.
 * Troque aqui: nome, logo, WhatsApp e textos institucionais.
 * As cores principais ficam em src/styles.css (--primary / --accent).
 */
export const STORE_CONFIG = {
  name: "SALVATORE PY IMPORTS",
  tagline: "Importados do Paraguai para o Brasil",
  logoUrl: "/logo-salvatore.webp",
  /**
   * ALTERE O WHATSAPP SOMENTE AQUI.
   * Use formato internacional, apenas números: 55 + DDD + número.
   * Exemplo: 5511999999999
   */
  whatsappNumber: "5511951145539",
  shippingFee: 35,
  email: "",
  instagram: "",
  currency: "BRL",
  locale: "pt-BR",
} as const;
