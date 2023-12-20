import Avatar from "./Avatar";

function Profile({ image, name, title, newbie }) {
  return (
    <div className="profile">
      <Avatar image={image} newbie={newbie} />
      <h1>{name}</h1>
      <p>{title}</p>
      <p>{newbie}</p>
    </div>
  );
}

export default Profile;
