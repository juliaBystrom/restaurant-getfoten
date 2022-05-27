
export const GetfotenMap = () => {
  const srcString = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJd8VScKaBX0YRJHwLCrPpK30&key=${process.env.REACT_APP_MAPS_API_KEY}&zoom=12`;

  return (
    <iframe
      src={srcString}
      width="300"
      height="450"
      style={{ border: 0, width: "100%" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
