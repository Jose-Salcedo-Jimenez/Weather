export const climateManager = (cloud_cover) => {
  let url;
  switch (true) {
    case cloud_cover >= 0 && cloud_cover < 30:
        url = "/icons/Sun.png";
        break;
    case cloud_cover >= 30 && cloud_cover < 70:
        url = "/icons/cloudy.png"
        break;
    case cloud_cover >= 70 && cloud_cover < 90:
        url = "/icons/sCloudy.png"    
        break;
    case cloud_cover >= 90 && cloud_cover <= 100:
        url = "/icons/sCloudy.png"
        break;
    default:
        url =  "/icons/Sun.png";
  }
  return url;
};
