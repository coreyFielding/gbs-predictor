import cn from "classnames"
import PropTypes from "prop-types"
import NextImage from "next/image"
import Link from "next/link"
import styles from "./image.module.scss"

// ? Read more on image optimisation - https://nextjs.org/docs/api-reference/next/image

// const Loader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
// };

export const Img = ({ className, src, alt, height, width }) => {
  const classes = cn(styles.image, className)

  return (
    <NextImage
      className={classes}
      src={src}
      alt={alt}
      height={height}
      width={width}
    />
  )
}

Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
}

// export const ImgLink = ({ className, url, src, alt, height, width }) => {
//   const classes = cn(styles.image, className)

//   return (
//     <Link href={url}>
//       <a>
//         <Image
//           className={classes}
//           src={src}
//           alt={alt}
//           height={height}
//           width={width}
//         />
//       </a>
//     </Link>
//   )
// }

// ImgLink.propTypes = {
//   className: PropTypes.string,
//   url: PropTypes.string,
//   src: PropTypes.string,
//   alt: PropTypes.string,
//   height: PropTypes.number,
//   width: PropTypes.number,
// }
