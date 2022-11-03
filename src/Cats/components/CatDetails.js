const CatDetails = (props) => {
  const { catDetail } = props;
  const { bio, pic } = catDetail;
  return (
    <div>
      <h1>Поздравляем</h1>
      <h2>Вы приобрели:</h2>
      <br />
      <img src={`${props.url}${pic}`} alt="pic" />
      <p>{bio}</p>
    </div>
  );
};
export default CatDetails;
