import axios from "axios";
import { goToFeed } from "../router/goToPages";
import { BASE_URL } from "../constants/urls";
//Bate na api de criar usuário

export const addresUserCard = (body, history) => {
  axios
    .post(`${BASE_URL}/address`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      //envia token
      localStorage.setItem("token", response.data.token);

      goToFeed(history);
    })
    .catch((error) => {
      alert("Endereço não adicionado, por favor tente novamente");
    });
};
