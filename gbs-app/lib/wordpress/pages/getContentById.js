import PropTypes from "prop-types";
import wordpress from "../";

const getContentById = async (contentType, id) => {
  try {
    const { data } = await wordpress.get(`${contentType}/${id}`, {
      params: {
        _fields: `title,slug,acf`,
      },
    });

    return data;
  } catch (err) {
    console.error(`Failed to get ${contentType}: `, err);
  }
};

export default getContentById;

getContentById.propTypes = {
  contentType: PropTypes.string,
  id: PropTypes.string.isRequired,
};

getContentById.defaultProps = {
  contentType: "pages",
};
