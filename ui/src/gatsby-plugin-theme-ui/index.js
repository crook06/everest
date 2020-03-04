export default {
  colors: {
    background: '#ffffff',
    primary: '#090610',
    text: '#090610',
    secondary: '#4C66FF',
    tertiary: '#7D7D7D',
    column: '#8A8A8A',
    fill: '#CFCFCF',
    black: '#090610',
    blackFaded: 'rgba(9,6,16,0.64)',
    grey: 'rgba(30,37,44,0.16)',
    whiteFaded: 'rgba(255,255,255,0.4)',
    linkHover: '#3043B2',
  },
  fonts: {
    body: 'Space Mono, monospace',
    heading: 'Space Mono, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 900,
  },
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 154],
  styles: {
    body: {
      fontFamily: 'body',
    },
    root: {
      position: 'relative',
    },
    Main: {
      py: [5, 7],
    },
    Header: {
      position: 'relative',
    },
    h1: {
      fontWeight: 'heading',
      fontSize: '3.25rem',
      lineHeight: '4rem',
      letterSpacing: '-0.46px',
      '@media (max-width: 640px)': {
        fontSize: '2.75rem',
        lineHeight: '3.25rem',
      },
    },
    h2: {
      fontSize: ['2rem', '2.75', '2.75rem'],
      fontWeight: 'heading',
      letterSpacing: '-0.4px',
      lineHeight: '3.375rem',
    },
    h3: {
      fontSize: '2rem',
      lineHeight: '2.75rem',
      fontWeight: 'heading',
      letterSpacing: '-0.8',
      color: 'primary',
    },
    h4: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: 'bold',
      color: 'black',
    },
    h6: {
      fontSize: '1.125rem',
      lineHeight: '2rem',
      fontWeight: 'normal',
    },
    p: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontFamily: 'body',
      letterSpacing: '-0.4px',
      color: 'text',
    },
    a: {
      textDecoration: 'none',
      display: 'block',
      color: '#4C66FF',
      fontSize: '1rem',
      fontWeight: 'bold',
      letterSpacing: '0.31px',
      lineHeight: '2.375rem',
      '&:hover': {
        color: 'primary',
      },
    },
    Link: {
      textDecoration: 'none',
      display: 'block',
      color: '#4C66FF',
      fontSize: '1rem',
      fontWeight: 'bold',
      letterSpacing: '0.31px',
      lineHeight: '2.375rem',
    },
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'secondary',
      boxShadow:
        '0 8px 32px 0 rgba(76,102,255,0.48), 0 4px 16px 0 rgba(0,0,0,0.16)',
      fontFamily: 'body',
      fontSize: '1rem',
      fontWeight: 'heading',
      letterSpacing: '1px',
      lineHeight: '2.5rem',
      height: '48px',
      boxSizing: 'content-box',
      border: 'none',
      px: 6,
      width: 'fit-content',
      transition: 'all 0.3s ease',
      '&:focus': {
        outline: 'none',
      },
      '&:hover': {
        boxShadow:
          '0 4px 32px 0 rgba(76,102,255,0.24), 0 12px 56px 0 rgba(30,37,44,0.32)',
        transition: 'all 0.3s ease',
      },
    },
    secondary: {
      color: 'secondary',
      bg: 'white',
      border: 'none',
      fontFamily: 'body',
      fontSize: '1rem',
      fontWeight: 'heading',
      letterSpacing: '1px',
      lineHeight: '2.5rem',
      height: '48px',
      boxSizing: 'content-box',
      px: 6,
      width: 'fit-content',
      transition: 'all 0.3s ease',
      '&:focus': {
        outline: 'none',
      },
      '&:hover': {
        boxShadow:
          '0 4px 32px 0 rgba(76,102,255,0.24), 0 12px 56px 0 rgba(30,37,44,0.32)',
        transition: 'all 0.3s ease',
      },
    },
  },
  text: {
    tag: {
      fontSize: '9px',
      lineHeight: '0.75rem',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      fontWeight: 'heading',
      color: 'primary',
      opacity: 0.64,
    },
    small: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      color: 'blackFaded',
      letterSpacing: '-0.4px',
    },
    large: {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      letterSpacing: '-0.4px',
    },
    smaller: {
      fontSize: '0.75rem',
      lineHeight: '1.25rem',
      letterSpacing: '-0.4px',
      color: 'blackFaded',
    },
    huge: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      color: 'black',
    },
    field: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      letterSpacing: '-0.4px',
      color: 'white',
    },
    emphasis: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: 'secondary',
      lineHeight: '1.5rem',
    },
  },
}
