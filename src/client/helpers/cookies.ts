import Cookie from 'js-cookie';

export const getCookie = (name: string) => {
  if (name) {
    const data: any = Cookie.get(name);

    if (data) {
      try {
        return JSON.parse(data);
      } catch (e) {
        return data;
      }
    }

    return null;
  }

  return null;
};

export const removeCookie = (name: string) => {
  if (name) {
    Cookie.remove(name);
  }
};

export const setCookie = (name: string, value: any, expires: any = 14) => {
  if (name && value) {
    return Cookie.set(name, typeof value === 'string' ? value : JSON.stringify(value), { expires });
  }

  return false;
};
