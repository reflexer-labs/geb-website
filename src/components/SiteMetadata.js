import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"
import getPrefixedPath from "../utils/getPrefixPath"

const SiteMetadata = ({ pathname }) => {
  const {
    siteUrl,
    title,
    twitter,
    favicon,
    image,
    description,
    titleTemplate,
  } = useSiteMetadata()

  const href = `${siteUrl}${pathname}`

  return (
    <Helmet title={title} titleTemplate={titleTemplate}>
      <link rel="canonical" href={href} />
      <link
        rel="shortcut icon"
        type="image/png"
        href={getPrefixedPath(favicon)}
      />
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <meta property="og:url" content={href} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${siteUrl}${getPrefixedPath(image)}`}
      />
      <meta property="og:image:alt" content="Reflexer Logo" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
    </Helmet>
  )
}

export default SiteMetadata
