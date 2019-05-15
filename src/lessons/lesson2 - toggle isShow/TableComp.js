import React, { Component } from 'react'

import Fetch from '../../components/elems/dataFetch'
import ShowText from '../../components/elems/ShowText'

import { Row } from './Row'
import { Cell } from './Cell'

import styled from 'styled-components'
import { colors, boxShadowMixinFunc } from '../../components/elems/ComputedStyles'
import '../../style.css'

const Table = styled.div`
  .edited {
    background: transparent;
    font-size: 20px;
    color: white;
    outline: none;
    border: none;
  }
`

const TitleStyled = styled.h1`
  color: ${ colors.text };
  display: inline-block;
  padding: 5px 10px;
  ${ boxShadowMixinFunc(0, 0, 4, 'rgba(0, 0, 0, 0.5)') };
`

class TableComponent extends Component {
  state = {
    data: []
  }
  componentDidMount () {
    fetch('http://www.json-generator.com/api/json/get/cgAIaIWdlu?indent=2')
      .then( res => res.json() )
      .then( res => this.setState({ data: res }))
      .catch( err => console.log( err ) )
  }
  editHandler = (e) => {
    const content = e.target.innerHTML

    e.target.innerHTML =
      `<input class="edited" type="text" value="${content}" />`

      /*
        1. это нормально так вот делать в реакте?
        2. новое значение нужно записать в this.setState( data : ...) как это лучше всего зделать?
          - можно тригернуть isActive. в 119 строке, хотя мы этот параметр передаем в stateless компонент. Получается что это не вариант?
          - замапить data state, но в этом случае как
          - 68, 69 str
        3. как здесь преминить двухстороннюю привязку ?
        Данных из state и то что мы вводим из инпута
        4. failed fetch см. скрин
        5. баг с версткой при нажатии на ячейку
        6. при повторном нажатии на инпут баг
        7. как реализовать width x2, x3 на div'ах
        8. data ? data.splice(0, 3) : '' error why ?? str74
        9. 22, 58 строка. Как здесь коректнее через styled comp
        передать стили кнопке ?
        10. Cell 26 str что если мы захотим ввести несколько
        производных ?

      */
  }
  deleteRow = (e) => (elem) => {

    console.log(e) // е && elem показывают на сабитие click
    console.log(elem) // как достучаться до компонента (key)
  }
  render() {
    return (
      <>
        <ShowText>
          <h4>*Задание 3. Написать Stateless компоненты для таблицы.*</h4>
          <p><i>Row -> Который выводит все дочерние элементы которые переданы внутрь</i>
            -> Дополнительно можно передать параметр head="true" который сделает
            эту строку таблички заголовком. По умолчанию false. Должно быть
            прописано в DefaultProps</p>
          <p><i>Cell-> Компонент который выводит дочерний контент переданный внутрь.</i>
          -> Можно передать параметр сколько ячеек (cells) занимает этот элемент
          -> Можно передать параметры с цветом текста и цветом фона
          -> Можно передать параметр с типом ячейки в зависимости от которого:
            a) type: DATE -> Данные выводятся курсивом
            б) type: NUMBER -> Данные выводятся справа
            в) type: MONEY -> Данные выводятся справа + появляется доп. параметр
              currency=$ который выводится после суммы.
              Если тип money и нету параметра с валютой
              выводить об этом предупреждение в консоль.
            г) type: TEXT -> Данные выводятся слева.</p>
        </ShowText>
        {/* Start Fetch */}
        <div className="wrap-fetch">
        <Fetch
          url="https://api.github.com/users/imgly/repos"
          render={({ data, isLoading }) => {
            // data ? data.splice(0, 3) : ''
            return (
            <div>
              <h2>img.ly repos</h2>
              {isLoading && <h2>Loading...</h2>}

              <ul>
                {data.length > 0 && data.map(repo => (
                  <li key={repo.id}>
                    {repo.full_name}
                  </li>
                ))}
              </ul>
            </div>
          )}} />
          </div>
        {/* End /Fetch */}
        <TitleStyled>Table</TitleStyled>
        <Table onClick={this.editHandler}>
          <Row head>
            <Cell text="id"/>
            <Cell text="name"/>
            <Cell text="company"/>
            <Cell text="phone"/>
            <Cell text="money"/>
          </Row>
          {
            this.state.data ?
            this.state.data.map( person => !person ? 'LOADING...' : (
              <Row key={person._id} del={this.deleteRow}>
                <Cell
                  text={person.index}
                  cells={1}
                  bgColor={ colors.purple }
                  fontColor='white'
                  type='NUMBER'
                />
                <Cell
                  text={person.name}
                  cells={2}
                  bgColor={ colors.blue }
                  fontColor='white'
                  type='NUMBER'
                />
                <Cell
                  text={person.company}
                  cells={2}
                  bgColor={ colors.green }
                  fontColor='white'
                  type='TEXT'
                />
                <Cell
                  text={person.phone}
                  cells={3}
                  bgColor={ colors.purple }
                  fontColor='white'
                  type='DATE'
                />
                <Cell
                  text={person.latitude.toFixed(3)}
                  cells={3}
                  bgColor={ colors.orange }
                  fontColor='white'
                  type='MONEY'
                  currency="$"
                />
              </Row>
            ) ) : ''
          }
        </Table>
      </>
    )
  }
}

export default TableComponent