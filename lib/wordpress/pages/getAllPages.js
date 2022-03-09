import axios from "axios";
import wordpress from "../";
import getNumPages from "../../../functions/wordpress/getNumPages";

const getAllPages = async () => {
  try {
    let content = [];

    const numPages = await getNumPages("pages", 50);

    for (let page = 1; page <= numPages; page += 1) {
      const { data } = await wordpress.get(`pages`, {
        params: {
          per_page: 50,
          page: page,
        },
      });
      content.push(data);
    }

    await axios
      .all(content)
      .catch((err) => console.log(`error fetching content for pages: `, err));

    return content.flat();
  } catch (err) {
    console.error("Failed to get Pages: ", err);
  }
};

export default getAllPages;
