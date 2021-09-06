function generateImg({ value, currentPage, type, orientation }) {
  return fetch(
    `https://pixabay.com/api/?image_type=${type}&orientation=${orientation}&q=${value}&page=${currentPage}&per_page=12&key=23189092-912e167e41c5e7d499821c37e`,
  )
    .then(response => response.json())
    .catch(err => console.log(err));
}
export default generateImg;
