export const logInSubmitHandler = async function logInSubmitHandle(
  username,
  password
) {
  try {
    const data = await fetch(`http://localhost:5050/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
      credentials: "include",
    });

    const responseText = await data.text();

    if (data.status === 200) {
      window.location.href = "/loggedIn";
      return responseText;
    }
    return responseText;
  } catch (error) {
    const res = error.response.data;
    return res;
  }
};
