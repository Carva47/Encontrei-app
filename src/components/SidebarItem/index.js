import React from 'react'
import { Container } from './styles'
export { default as Menu } from "../Menu";
const SidebarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}

export default SidebarItem