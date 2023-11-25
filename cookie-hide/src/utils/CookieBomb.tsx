import Cookies from 'js-cookie';

const cookieBomb = (token: string) => {
  //set a bunch of random cookies
  for (let i = 0; i < 20; i++) {
    Cookies.set(`1-cookie${i}`, `cookie${i}`, { expires: 1 });
  }
  Cookies.set('5-token', token, { expires: 1 });

  for (let i = 0; i < 20; i++) {
    Cookies.set(`6-cookie${i}`, `cookie${i}`, { expires: 1 });
  }
};

export { cookieBomb };
