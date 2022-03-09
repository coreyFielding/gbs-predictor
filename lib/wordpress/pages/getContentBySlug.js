import PropTypes from "prop-types";
import wordpress from "../";

const getContentBySlug = async (contentType, slug) => {
  try {
    const { data } = await wordpress.get(`${contentType}`, {
      params: {
        slug: slug,
        _fields: `title,slug,acf`,
        per_page: 1,
      },
    });

    return data[0];
  } catch (err) {
    console.error(`Failed to get ${contentType}: `, err);
  }
};

export default getContentBySlug;

getContentBySlug.propTypes = {
  contentType: PropTypes.string,
  slug: PropTypes.string.isRequired,
};

getContentBySlug.defaultProps = {
  contentType: "pages",
  slug: "home",
};
