export default function Avatar({ image, newbie }) {
  return (
    <div className="avatar">
      {newbie && <span className="newbie">NEW</span>}
      <img className="photo" src={image} alt="avatar" />
    </div>
  );
}
