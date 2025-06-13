export const getUserData = () => {
  const data = localStorage.getItem("ww-user");
  return data ? JSON.parse(data) : null;
};

export const saveUserData = (data) => {
  localStorage.setItem("ww-user", JSON.stringify(data));
};