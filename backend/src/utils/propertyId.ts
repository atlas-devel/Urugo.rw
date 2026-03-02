import prisma from "./prisma";

const districtInitials: Record<string, string> = {
  BUGESERA: "BG",
  BURERA: "BR",
  GAKENKE: "GK",
  GASABO: "GS",
  GATSIBO: "GT",
  GICUMBI: "GC",
  GISAGARA: "GG",
  HUYE: "HY",
  KAMONYI: "KM",
  KARONGI: "KR",
  KAYONZA: "KY",
  KICUKIRO: "KK",
  KIREHE: "KH",
  MUHANGA: "MH",
  MUSANZE: "MS",
  NGOMA: "NG",
  NGORORERO: "NR",
  NYABIHU: "NB",
  NYAGATARE: "NT",
  NYAMAGABE: "NM",
  NYAMASHEKE: "NS",
  NYANZA: "NZ",
  NYARUGENGE: "NY",
  RUBAVU: "RB",
  RUHANGO: "RH",
  RULINDO: "RL",
  RUSIZI: "RZ",
  RUTSIRO: "RT",
  RWAMAGANA: "RM",
};

export function generatePropertyId(
  district: string,
  latestPropertyNumber: string | null,
): string {
  const prefix: string = districtInitials[district.toUpperCase()];
  if (!prefix) {
    throw new Error(`Invalid district name: ${district}`);
  }

  if (!latestPropertyNumber) {
    return `${prefix}-0000001`;
  }

  const newNumberPart = Number(latestPropertyNumber?.split("-")[1]) + 1;
  return `${prefix}-${newNumberPart.toString().padStart(7, "0")}`;
}
