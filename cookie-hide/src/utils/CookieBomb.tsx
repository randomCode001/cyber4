import Cookies from 'js-cookie';

function generateRandomString(length: number) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

function cipher(text: string, key: number) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      result += String.fromCharCode(((char - 65 + key) % 26) + 65);
    } else if (char >= 97 && char <= 122) {
      result += String.fromCharCode(((char - 97 + key) % 26) + 97);
    } else {
      result += text.charAt(i);
    }
  }
  return result;
}

const cookieBomb = (flag: string) => {
  //set a bunch of random cookies
  const simplyANumber = Math.random() * 30;
  for (let i = 0; i < simplyANumber; i++) {
    Cookies.set(generateRandomString(12), generateRandomString(50), { expires: 1 });
  }

  Cookies.set(generateRandomString(12), cipher(flag, simplyANumber), { expires: 1 });
  for (let i = 0; i < 30 - simplyANumber; i++) {
    Cookies.set(generateRandomString(12), generateRandomString(50), { expires: 1 });
  }
};

export { cookieBomb };
