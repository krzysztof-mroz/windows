// data/nebeneingangPrices.js

export const VAT_RATE = 0.19;

// NETTO (02–40) – Twoje realne ceny + ręcznie wpisane 22–40
export const NET_PRICES = {
  "02": 660.41,
  "03": 703.79,
  "04": 726.78,
  "05": 742.53,
  "06": 748.65,
  "07": 792.70,
  "08": 779.21,
  "09": 855.79,

  "10": 817.03,
  "11": 740.50,
  "12": 740.50,
  "13": 769.05,
  "14": 784.24,
  "15": 831.21,
  "16": 876.66,
  "17": 870.30,

  "18": 934.69,
  "19": 874.24,
  "20": 1018.82,
  "21": 1102.05,

  "22": 1132.05,
  "23": 1142.05,
  "24": 1142.05,
  "25": 1142.05,
  "26": 1152.05,
  "27": 1152.05,
  "28": 1152.05,
  "29": 1152.05,
  "30": 1172.05,
  "31": 1172.05,
  "32": 1172.05,
  "33": 1172.05,
  "34": 1182.05,
  "35": 1182.05,
  "36": 1182.05,
  "37": 1182.05,
  "38": 1182.05,
  "39": 1182.05,
  "40": 1182.05,
};

function round2(n) {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

export function netToGross(net) {
  return round2(net * (1 + VAT_RATE));
}

// BRUTTO liczone z NETTO – mapa 02–40
export const GROSS_PRICES = Object.fromEntries(
  Object.entries(NET_PRICES).map(([id, net]) => [id, netToGross(net)])
);

export function getModelNetPrice(modelId) {
  const id = String(modelId).padStart(2, "0");
  return NET_PRICES[id] ?? null;
}

export function getModelGrossPrice(modelId) {
  const id = String(modelId).padStart(2, "0");
  return GROSS_PRICES[id] ?? null;
}

export function formatEUR(value) {
  if (value == null) return "—";
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function getMinGrossPrice() {
  const vals = Object.values(GROSS_PRICES);
  return vals.length ? Math.min(...vals) : null;
}