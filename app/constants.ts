export const ITEMS_PER_PAGE = 10;

export const CACHE_CONFIG = {
  PREFIX: "audioData_",
  TTL: 10 * 60 * 1000, // 10 minutes in milliseconds
};

export const baseEndPoint = process.env.NEXT_PUBLIC_BASE_END_POINT?.replace(
  /\/$/,
  ""
) as string;

export const OPENAI_VOICES = {
  alloy: "Alloy (Male, Warm and Deep)",
  echo: "Echo (Neutral, Clear)",
  fable: "Fable (Female, Storytelling)",
  onyx: "Onyx (Male, Strong and Sharp)",
  nova: "Nova (Female, Young and Dynamic)",
  shimmer: "Shimmer (Female, Soft and Gentle)",
};

export const LANGUAGES = {
  en: "English",
  vi: "Vietnamese",
  af: "Afrikaans",
  sq: "Albanian",
  ar: "Arabic",
  hy: "Armenian",
  ca: "Catalan",
  zh: "Chinese",
  "zh-cn": "Chinese (Mandarin/China)",
  "zh-tw": "Chinese (Mandarin/Taiwan)",
  "zh-yue": "Chinese (Cantonese)",
  hr: "Croatian",
  cs: "Czech",
  da: "Danish",
  nl: "Dutch",
  "en-au": "English (Australia)",
  "en-uk": "English (United Kingdom)",
  "en-us": "English (United States)",
  eo: "Esperanto",
  fi: "Finnish",
  fr: "French",
  de: "German",
  el: "Greek",
  ht: "Haitian Creole",
  hi: "Hindi",
  hu: "Hungarian",
  is: "Icelandic",
  id: "Indonesian",
  it: "Italian",
  ja: "Japanese",
  ko: "Korean",
  la: "Latin",
  lv: "Latvian",
  mk: "Macedonian",
  no: "Norwegian",
  pl: "Polish",
  pt: "Portuguese",
  "pt-br": "Portuguese (Brazil)",
  ro: "Romanian",
  ru: "Russian",
  sr: "Serbian",
  sk: "Slovak",
  es: "Spanish",
  "es-es": "Spanish (Spain)",
  "es-us": "Spanish (United States)",
  sw: "Swahili",
  sv: "Swedish",
  ta: "Tamil",
  th: "Thai",
  tr: "Turkish",
  cy: "Welsh",
};
