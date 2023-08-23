import { css } from "styled-components"

// export const MAILCHIMP_URL =
//   "https://finance.us20.list-manage.com/subscribe/post-json?u=a3b1b26a531e341b4e086da36&id=b5976e4e32"

const MEDIA_WIDTHS = {
  upToExtraSmall: 576,
  upToSmall: 768,
  upToMedium: 992,
  upToLarge: 1280,
}

export const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    accumulator[size] = (a, b, c) => css`
      @media (max-width: ${MEDIA_WIDTHS[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
)
