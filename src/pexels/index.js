export const getPexelsCollection = async () => {
  const data = await fetch(
    `${process.env.API_URL_V}/v1/collections/${process.env.API_COLLECTION_ID}`,
    {
      headers: { Authorization: process.env.API_KEY_V },
    }
  );
  const result = data.json();
  return result;
};
