import wordpress from "../../lib/wordpress";

const getNumPages = async (contentType, perPage = 50) => {
  try {
    const { headers } = await wordpress.get(`/${contentType}`, {
      params: {
        _fields: `id`,
        per_page: perPage,
      },
    });

    return headers["x-wp-totalpages"];
  } catch (err) {
    console.error(`Failed to count content for ${contentType} :: `, err);
  }
};

export default getNumPages;
