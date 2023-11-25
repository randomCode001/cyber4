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

const cookieBomb = (token: string) => {
  //set a bunch of random cookies
  const simplyANumber = Math.random() * 30;
  for (let i = 0; i < simplyANumber; i++) {
    Cookies.set(generateRandomString(12), generateRandomString(50), { expires: 1 });
  }
  Cookies.set(generateRandomString(12), token, { expires: 1 });
  for (let i = 0; i < 30 - simplyANumber; i++) {
    Cookies.set(generateRandomString(12), generateRandomString(50), { expires: 1 });
  }
};

export { cookieBomb };
