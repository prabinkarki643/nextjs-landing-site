const breakPointValues = {
  xs: 576,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
}
export const breakPointValuesUtils = {
  xs: `width:${breakPointValues.xs}px`,
  sm: `width:${breakPointValues.sm}px`,
  md: `width:${breakPointValues.md}px`,
  lg: `width:${breakPointValues.lg}px`,
  xl: `width:${breakPointValues.xl}px`,
  xxl: `width:${breakPointValues.xxl}px`,
  /**
   *
   * @param {('xs'|'sm'|'md'|'lg'|'xl'|'xxl')} bp
   * @returns
   */
  up: (bp) => {
    return `(min-width:${breakPointValues[bp]}px)`
  },
  /**
   *
   * @param {('xs'|'sm'|'md'|'lg'|'xl'|'xxl')} bp
   * @returns
   */
  down: (bp) => {
    return `(max-width:${breakPointValues[bp]}px)`
  },
  breakPointValues: breakPointValues
}

// https://stackoverflow.com/questions/52484812/reactjs-material-ui-breakpoints
