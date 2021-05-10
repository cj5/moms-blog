const styleMixin = {
  transition: `
    transition: 0.3s all ease-in-out;
  `,

  fz_2xl: `font-size: 60px;`,
  fz_xl: `font-size: 36px;`,
  fz_lg: `font-size: 30px;`,
  fz_md: `font-size: 24px;`,
  fz_sm: `font-size: 18px;`,
  fz_xs: `font-size: 16px;`,
  fz_2xs: `font-size: 14px;`,

  flexGrid: (cols, gutter = 0) => {
    return (`
      display: flex;
      flex-wrap: wrap;
      > * {
        margin-left: 0;
        margin-bottom: 0;
        margin-right: ${gutter};
        width: calc((100% / ${cols}) - ${gutter} + (${gutter} / ${cols}));
        box-sizing: border-box;
        &:nth-child(n+${cols + 1}) {
          margin-top: ${gutter};
        }
        &:nth-child(${cols}n) {
          margin-right: 0;
        }
      }`
    )
  },
}

export default styleMixin
