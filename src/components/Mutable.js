import { useState, useEffect } from "react"

function Mutable() {
  console.log("rendered")
  const [ profile, setProfile ] = useState({
    user : {
      name : 'Duriamn',
      age : 10
    }
  })

  // useEffect(()=> {
  //   throw new Error("Error!")
  // }, [])


  const handleClick = () => {
    console.log("invoked handler")
    profile.user.name = 'COCO'
    console.log('profile', profile)

    // let newProfile = profile;
    // newProfile.user.name = "Coco_new";
    // setProfile(newProfile);

    // setProfile(prevProfile => {
    //   let newProfile = prevProfile;
    //   return newProfile
    // })

    // setProfile(prevProfile => {
    //   let newProfile = { ...prevProfile}
    //   newProfile.name = 'spreadCopy_COCO'
    //   return newProfile
    // })

    // setProfile(prevProfile => ({
    //   ...prevProfile,
    //   user : {
    //     ...prevProfile.user,
    //     name : 'nested spread_coco'
    //   }
    // }))

  }
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <p>{profile.user.name}</p>
    </div>
  )
}

export default Mutable;
