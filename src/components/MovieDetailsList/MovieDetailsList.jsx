function MovieDetailsList({ post }) {
  const {
    data: { backdrop_path, overview, title, popularity, genres },
  } = post;

  return (
    <>
      <h2>{title}</h2>
      <img src={backdrop_path} alt={title} />
      <p>{overview}</p>
      <p>{popularity}</p>
      <p>{genres}</p>
    </>
  );
}

export default MovieDetailsList;
