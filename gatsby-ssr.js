const cloneDeepWith = require("lodash.clonedeepwith")

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  replaceHeadComponents(omitDeep(headComponents, ["data-react-helmet"]))
}

/**
 * remove properties from collection deep
 * @param collection
 * @param excludeKeys
 * @returns {any}
 */
const omitDeep = (collection, excludeKeys) =>
  cloneDeepWith(collection, value => {
    if (value && typeof value === "object") {
      for (const key of excludeKeys) {
        try {
          delete value[key]
        } catch (_) {
          // console.log("ignore", _);
        }
      }
    }
  })
