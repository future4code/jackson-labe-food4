import React, { useState } from "react";
import {Button, InputAdornment, TextField, ThemeProvider, Typography} from '@material-ui/core'
import { useHistory } from "react-router-dom";
import LogoRappi4 from "./logo-future-eats-invert.png"
import {FormContainer, LinkCadastro, Container, LogoRappi, Text} from './styled-LoginPage'
import {theme} from "../../constants/themes"
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios'
import { BASE_URL } from "../../constants/urls";


function LoginPage() {
  const history = useHistory();

  const [Email, setEmail] = useState("")
  const [Senha, setSenha] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  } 

  const onChangeSenha = (e) => {
    setSenha(e.target.value)
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const fazerLogin = async (event) => {
    event.preventDefault()

    const body = {
      email: Email, 
      password: Senha
    }

    const request = await axios.post(`${BASE_URL}login`, body)
    .then(res => {
      console.log(res)
      window.localStorage.setItem("token", res.data.token)
      history.push("/feed")
    })
    .catch(err => {
      setEmail("")
      setSenha("")
      console.log(err)
    })
  }

  const irParaCadastro = () => {
    history.push("/signup")
  }

  return (
    <ThemeProvider theme={theme}>

      

      <Container>      
          <LogoRappi src={LogoRappi4} />      
          <Text>Entrar</Text>  
        
        <FormContainer>
            
          <TextField
            value={Email}
            onChange={onChangeEmail}
            color="secondary" 
            label="Email" 
            placeholder="email@email.com"
            type="email"
            variant="outlined"
            margin="dense"
            required
            autoFocus={true}
          />
          <TextField
            value={Senha}
            onChange={onChangeSenha} 
            color="secondary"
            label="Senha" 
            placeholder="Mínimo 6 caracteres"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            margin="dense"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 {showPassword ? <VisibilityIcon onClick={handleClickShowPassword}/> : <VisibilityOffIcon onClick={handleClickShowPassword}/>}
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" onClick={fazerLogin} color="secondary" variant="contained">Login</Button>
          <LinkCadastro color="textPrimary" onClick={irParaCadastro}><Typography>Não possui cadastro? Clique aqui</Typography></LinkCadastro>
        </FormContainer>

      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;
