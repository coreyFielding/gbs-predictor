import cn from "classnames"
import Link from "next/link"
import PropTypes from "prop-types"
import styles from "./button.module.scss"
import Image from "next/image"

export const ButtonPill = ({
  children,
  url,
  urlExternal,
  image,
  styles: userStyles,
}) => {
  const classes = cn(styles.button, styles.pill, userStyles)

  if (url) {
    return urlExternal ? (
      <a
        href={url}
        className={classes}
        aria-label={children}
        target="_blank"
        rel="noreferrer"
      >
        {image && (
          <div className={styles.pill_img}>
            <Image
              src={`/images/${image}.svg`}
              alt={image}
              width={30}
              height={30}
            />
          </div>
        )}
        {children}
      </a>
    ) : (
      <Link href={url}>
        <a className={classes} aria-label={children}>
          {children}
        </a>
      </Link>
    )
  }
}

const ButtonComponent = ({}) => <></>

ButtonComponent.Pill = ButtonPill

export const Button = ButtonComponent

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary"]),
  url: PropTypes.string,
  urlExternal: PropTypes.bool,
}

Button.defaultProps = {
  type: "primary",
  urlExternal: false,
}
