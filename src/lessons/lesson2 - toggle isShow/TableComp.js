import React, { Component } from 'react'
import styled from 'styled-components'

import ShowText from '../../components/elems/ShowText'

import { Row } from './Row'
import { Cell } from './Cell'

const Table = styled.div`

`

class TableComponent extends Component {
  state = {
    data: []
  }

  componentDidMount () {
    fetch('http://www.json-generator.com/api/json/get/cgAIaIWdlu?indent=2')
      .then( res => res.json() )
      .then( res => this.setState({ data: res }))
  }
  render() {
    return (
      <>
        <h3>Table Component</h3>
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
              Если тип money и нету параметра с валютой выводить об этом
              предупреждение в консоль
            г) type: TEXT -> Данные выводятся слева.</p>
        </ShowText>
        <Table>
          <Row head>
            <Cell text="id"/>
            <Cell text="name"/>
            <Cell text="company"/>
            <Cell text="phone"/>
          </Row>
          {
            this.state.data ?
            this.state.data.map( person => (
              <Row key={person._id}>
                <Cell text={person.index} />
                <Cell text={person.name}/>
                <Cell text={person.company}/>
                <Cell text={person.phone}/>
              </Row>
            ) ) : ''
          }
        </Table>
      </>
    )
  }
}

export default TableComponent