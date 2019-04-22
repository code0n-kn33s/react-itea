/*

Задание 2:

  Написать кастомный элемент инпута.
  У компонента нужно сделать возможность настраивать:
  - type
  - placeholder
  - value
  - onChangeHandler
  - name

  Результатом будет компонент,
  <label>
    <div>{name}</div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handler}
    />
  </label>

  PropTypes:
    type: Одно из значений: text, password, number
    placeholder: строка
    value: строка или любой
    handler: function

*/
