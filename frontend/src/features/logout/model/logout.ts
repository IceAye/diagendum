export const logout = () => {
  localStorage.removeItem('token');
  sessionStorage.clear();
  //todo:
  //dispatch(clearUser());
};
