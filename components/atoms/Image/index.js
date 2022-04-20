import cn from "classnames"
import PropTypes from "prop-types"
import Image from "next/image"
import Link from "next/link"
import styles from "./image.module.scss"

// ? Read more on image optimisation - https://nextjs.org/docs/api-reference/next/image

export const NextImage = ({ className, src, alt, height, width, layout }) => {
  const classes = cn(styles.image, className)

  return (
    <Image
      className={classes}
      src={src}
      alt={alt}
      height={height}
      width={width}
      layout={layout}
    />
  )
}

NextImage.propTypes = {
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

export default NextImage
