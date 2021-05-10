import { createGlobalStyle } from 'styled-components'
import styleVar from '../styles/variables'
import styleMixin from '../styles/mixins'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${styleVar.fontMain};
    font-size: 18px;
    line-height: 1.2;
    color: ${styleVar.color_1};
  }

  .heading-sm {
    ${styleMixin.fz_2xs}
  }

  .heading {
    font-family: ${styleVar.fontHeading};
    text-transform: uppercase;
  }

  .text-link {
    ${styleMixin.fz_md}
    ${styleMixin.transition}
    &:hover {
      color: ${styleVar.color_1_hov};
    }
  }

  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }

  .contain {
    padding-right: 20px;
    padding-left: 20px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: ${styleVar.bpXl + 'px'}) {
      max-width: ${styleVar.bpXl + 'px'};
    }
  }

  .mxw-lg {
    max-width: 700px;
    margin: 0 auto;
  }

  .fz-2xl { ${styleMixin.fz_2xl} }
  .fz-xl { ${styleMixin.fz_xl} }
  .fz-lg { ${styleMixin.fz_lg} }
  .fz-md { ${styleMixin.fz_md} }
  .fz-sm { ${styleMixin.fz_sm} }
  .fz-xs { ${styleMixin.fz_xs} }
  .fz-2xs { ${styleMixin.fz_2xs} }
`

export default GlobalStyles
