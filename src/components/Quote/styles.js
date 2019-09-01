export default {
  Blockquote: {
    position: 'relative',
    paddingLeft: '50px',
    fontFamily: '"Georgia", serif',
    fontSize: '3.2rem',
    fontWeight: 500,
    lineHeight: 1.3,
  
    '&::before, &::after': {
      color: 'rgba(166, 166, 166, 0.4)',
      fontSize: '2.0em', 
      fontWeight: 400,
      lineHeight: '0.1em'
    },

    '&::before': {
      position: 'absolute',
      left: 0,
      content: 'open-quote',
      marginRight: '0.15em',
      verticalAlign: '-0.15em',
    },

    '&::after': {
      content: 'close-quote',
      verticalAlign: '-0.7em'
    }
  }
}
