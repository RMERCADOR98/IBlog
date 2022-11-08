import axios from "axios";

const SignUp = async (FormData, history) => {
  //Fetch

  const base_url =
    "https://iblogapi-production.up.railway.app/api/v1/auth/signup";

  await axios
    .post(base_url, FormData)
    .then(({ data }) => {
      if (typeof data.id === "number") {
        history.push("/signIn2");
      }
    })
    .catch((err) => console.log(err));
};

export default SignUp;
