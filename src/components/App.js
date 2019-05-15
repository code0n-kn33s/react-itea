import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import styled, { css } from 'styled-components'
import rootRoutes from './RootRoutes'


const TheoryStyled = styled.div`
  display: flex;
  float: left;
  ${ props => props.floated && css`
    float: right;
  `}
`

const Header = styled.div`
  border-bottom: 1px solid grey;
  overflow: hidden;
`

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid lightseagreen;
  border-radius: 4px;
  margin: 10px;
  color: lightseagreen;
  ${ props => props.active && css`
    background: lightseagreen;
    color: black;
  `}
  .active, :hover {
    background: lightseagreen;
    color: black;
  };
`
class App extends Component {
  render() {
    return (
      <>
        <Header>
          <TheoryStyled>
              <NavLinkStyled exact to="/">Урок 1</NavLinkStyled>
              <NavLinkStyled to="/lesson/2">Урок 2</NavLinkStyled>
              <NavLinkStyled to="/lesson/3">Урок 3</NavLinkStyled>
              <NavLinkStyled to="/lesson/4">Урок 4</NavLinkStyled>
              <NavLinkStyled to="/lesson/5">Урок 5</NavLinkStyled>
              <NavLinkStyled to="/lesson/6">Урок 6</NavLinkStyled>
          </TheoryStyled>
          <TheoryStyled floated>
            <NavLinkStyled exact to="/Theory/React">
              Теория по React</NavLinkStyled>
            <NavLinkStyled to="/Theory/Redux">
              Теория по Redux</NavLinkStyled>
          </TheoryStyled>
        </Header>
        <div className="content">
          <Switch>
            {
              rootRoutes.map( (route, index) => (
                <Route
                  key={index}
                  {...route}
                />
              ))
            }
          </Switch>
        </div>
      </>
    )
  }
}

export default App