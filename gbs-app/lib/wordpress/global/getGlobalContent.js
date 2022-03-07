import wordpress from "../";

const getGlobalContent = async () => {
  try {
    const { data } = await wordpress.get(`acf/options`);
    return data;
  } catch (err) {
    console.log(`Failed to get global content from ACF options: `, err);
  }
};

export default getGlobalContent;
