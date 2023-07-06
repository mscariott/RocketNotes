import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { useAuth } from "../../hooks/auth"

export function Header() {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  function handleSignOut() {
    navigation("/")
    signOut();
  }

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl}
          alt="Foto do usuário" />

        <div>
          <span>Bem vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
      <RiShutDownLine />
    </Logout>
    </Container >
  )
}