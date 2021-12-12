import { getAllProfiles } from "../data/profiles";
import ProfileCard from "./profilecard";

function ProfileCards() {
  const profiles = getAllProfiles();
  return (
    <div className="flex flex-wrap justify-around fl w-100 w-two-thirds-l">
      {profiles.map(profile => (
        <ProfileCard profil={profile} />
      ))}
      
    </div>
  );
}

export default ProfileCards;
