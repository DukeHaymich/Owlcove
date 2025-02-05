export function dataURI(contentType: string, dataBase64: string) {
  return `data:${contentType};base64,${dataBase64}`;
}
