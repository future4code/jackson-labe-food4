import axios from "axios";
import { goToProfile } from "../router/goToPages";
import { BASE_URL } from "../constants/urls";

//edição de usuário
export const editUser = (body, history) => {
  axios
    .put(`${BASE_URL}profile`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      goToProfile(history);
    })
    .catch((error) => {
      alert("Perfil não atualizado, por favor tente novamente");
    });
};
