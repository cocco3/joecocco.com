export default {
  Blockquote: {
    position: 'relative',
    paddingLeft: '50px',
    fontFamily: `Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif`,
    fontSize: '3.2rem',
    fontWeight: 500,
    lineHeight: 1.3,
    margin: '0.6em 0.8em',
  
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
      top: '0.3em',
    },

    '&::after': {
      content: 'close-quote',
      verticalAlign: '-0.7em'
    }
  }
}
