import PlayerPreview from "./PlayerPreview";

const Player = ({ label, score, profile }) => {
  return (
    <div>
      <h1 className="header">{label}</h1>
      <h3 style={{ textAlign: "center" }}>{score}</h3>
      <PlayerPreview avatar={profile.avatar_url} userName={profile.login}>
        <ul className="space-list-items">
          {profile.name && <li>{profile.name}</li>}
          {profile.location && <li>{profile.location}</li>}
          {profile.company && <li>{profile.company}</li>}
          <li>Followers:{profile.followers}</li>
          <li>Following:{profile.following}</li>
          <li>Public Repos: {profile.public_repos}</li>
          {profile.blog && <li><a href={profile.blog}>{profile.blog}</a></li>}
        </ul>
      </PlayerPreview>
    </div>
  );
};

export default Player;
