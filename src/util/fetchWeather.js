export const urlFormat = (city) => {
  const parameters = new URLSearchParams({
    place_id: city,
    sections: "all",
    language: "en",
    key: process.env.NEXT_PUBLIC_API_KEY,
  });
  const url = `https://www.meteosource.com/api/v1/free/point?${parameters}`;
  return url;
};

export const handleWeather = async (url) => {
  const response = await fetch(url);
  try {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.error(`Error getting weather ${error}`);
  }
};
