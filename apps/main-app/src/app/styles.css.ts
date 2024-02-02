import {css, token} from "@panda-nx/theme";

export const withTokenFunction = css({
  fontSize: "20px",
  color: token("colors.deepPurple")
})

export const withTokenString = css({
  fontSize: "20px",
  color: "token(colors.deepPurple)"
})
