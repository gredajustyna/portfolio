export const getColorFromLanguage = (language: string): string => {
  switch (language) {
    case "Typescript":
      return "#3378c6";
    case "Dart":
      return "#07b5ac";
    case "Javascript":
      return "#f3e059";
    default:
      return "#ffffff";
  }
};
