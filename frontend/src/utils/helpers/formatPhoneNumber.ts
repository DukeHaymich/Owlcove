export function formatPhoneNumber(phone_number: string) {
  let result = phone_number.slice(0, 4);
  for (let i = 4; i < phone_number.length; i += 3) {
    result = result + ' ' + phone_number.slice(i, i + 3);
  }
  return result;
}
