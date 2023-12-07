function GallaryMain({ imageArr }) {
  return (
    <div>
      {imageArr.map((image) => {
        return (
          <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
          </div>
        );
      })}
    </div>
  );
}
export default GallaryMain;
