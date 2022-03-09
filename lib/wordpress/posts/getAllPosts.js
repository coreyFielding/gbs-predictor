import axios from "axios";
import wordpress from "../";
import getNumPages from "../../../functions/wordpress/getNumPages";

const queryAllPosts = async () => {
  try {
    let content = [];

    const numPages = await getNumPages("posts", 50);

    for (let page = 1; page <= numPages; page += 1) {
      const { data } = await wordpress.get(`posts`, {
        params: {
          per_page: 50,
          page: page,
        },
      });
      content.push(data);
    }

    await axios
      .all(content)
      .catch((err) => console.log(`error fetching content for posts: `, err));

    return content.flat();
  } catch (err) {
    console.error("Failed to get Posts: ", err);
  }
};

export default queryAllPosts;
