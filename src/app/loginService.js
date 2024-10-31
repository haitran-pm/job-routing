const loginService = async ({ username, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "hai" && password === "123") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};

export default loginService;
