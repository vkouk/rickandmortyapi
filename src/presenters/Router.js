import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import CharactersPage from 'containers/characters'
import CharacterPage from 'containers/character'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
`

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<CharactersPage />} />
          <Route path="/character/:characterId" element={<CharacterPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default Router
