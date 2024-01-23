 
 export type profileProps = {
   name: string;
 
 }

const Profile = ({name}:profileProps) => {
  return (
    <div>Profile of user { name}</div>
  )
}

export default Profile