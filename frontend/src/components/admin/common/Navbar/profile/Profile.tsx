import profile from "../../../../../assets/images/profile.jpeg";

function Profile() {
  return (
    <div className="shrink-0 shadow-md border-gray-300 dark:border-gray-800  border rounded-full h-8 w-8  overflow-hidden ">
      <img loading="lazy" src={profile} className="" alt="w-full h-full" />
    </div>
  );
}

export default Profile;
