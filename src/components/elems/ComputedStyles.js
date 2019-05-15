
export const colors = {
  green: 'mediumseagreen',
  pink: 'palevioletred',
  text: 'rgb(46, 68, 78)',
  purple: 'rebeccapurple',
  orange: 'darkorange',
  blue: 'royalblue'
}

export const boxShadowMixinFunc = (top, left, blur, color, inset = false) => {
 return `box-shadow: ${inset ? 'inset' : ''} ${top}px ${left}px ${blur}px ${color};`;
}