// import config from "../../gatsby-config"
// const { pathPrefix } = config

// const activeEnv = process.env.NODE_ENV || "development"
// const isDevelopment = activeEnv === "development"

const getPrefixedPath = url => {
  // return isDevelopment ? url : path.join(pathPrefix, url)
  return url
}
export default getPrefixedPath
