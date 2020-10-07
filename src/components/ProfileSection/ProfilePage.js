import React from "react";
import {
  Container,
  Title,
  DataProfile,
  ContainerIcon,
  ContainerAddress,
  TitleAddress,
  Address,
  ContainerIconAddres,
  Historico,
  Messagem,
  HistoricoP,
} from "./styles";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

function ProfilePage() {
  return (
    <>
      <Container>
        <Title>Meu Perfil</Title>
      </Container>
      <DataProfile>
        <ContainerIcon>
          <span>Bruna Oliveira</span>
          <CreateOutlinedIcon />
        </ContainerIcon>

        <span>bruna_o@gmail.com</span>
        <span>333.333.333-33</span>
      </DataProfile>

      <ContainerAddress>
        <TitleAddress>Endereço cadastrado</TitleAddress>

        <ContainerIconAddres>
          <Address>Rua Alessandra Vieira, 42 - Santana</Address>
          <CreateOutlinedIcon />
        </ContainerIconAddres>
      </ContainerAddress>

      <Historico>
        <HistoricoP>Histórico de pedidos</HistoricoP>
      </Historico>
      <Messagem>Você não realizou nenhum pedido</Messagem>
    </>
  );
}

export default ProfilePage;
