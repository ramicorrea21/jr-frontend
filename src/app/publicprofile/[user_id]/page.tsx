import { BiPencil, BiUserCircle, BiUser, BiPhone, BiLogoGmail } from "react-icons/bi"
import Image from "next/image"
export default async function PublicProfile({params : user_id} : {params : {user_id : number}}){
    const id = user_id.user_id
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/publicprofile/${id}`)
    const profile = await res.json() 

    

    return( 
        <div className="flex justify-center lg:mt-40 lg:mx-0 mx-6">
      <div className="w-full max-w-6xl">
        
        
          {/* Purple banner at the top */}
          <div className="relative bg-purple-600 rounded-t-lg h-48 px-4 pt-4 pb-16 flex justify-end items-center">
          <BiPencil size={24} className="text-white" />
          <BiUserCircle size={24} className="text-white" />
        </div>

        {/* White block for user info */}
        <div className="bg-white rounded-b-lg shadow-lg px-6 pt-16 pb-8 -mt-12 relative z-10">
          {/* User's avatar */}
          <div className="absolute -top-24 left-5 w-36 h-36 rounded-full overflow-hidden border-4 border-white">
            {profile?.avatar ? 
            <Image
            src={profile?.avatar}
            alt="Profile picture"
            width={144}
            height={144}
            className="object-cover"
          />:  <BiUser size={100} className="rounded-full mb-2" />
            }
            
          </div>

          {/* User's information */}
          <div>
            <h1 className="text-2xl font-bold">{profile?.first_name} {profile?.last_name}</h1>
            <h2 className="text-xl mb-1">{profile?.profession}</h2>
            <p className="text-sm mb-1">{profile?.city}, {profile?.state}, United States</p>
            <p className="text-sm mb-1 flex"><BiPhone className="mr-1"  size={20}/> {profile?.phone}</p>
            <p className="text-sm mb-1 flex"><BiLogoGmail  className="mr-1" size={20}/> {profile.user_email} </p>
            <div className="flex space-x-2 mt-4">
              <button className="border rounded-md py-1 px-3 text-sm">
                Open to contract
              </button>
              <button className="border rounded-md py-1 px-3 text-sm">
               Searching for gigs
              </button>
              <button className="border rounded-md py-1 px-3 text-sm">
               Hiring
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-lg px-6 pt-8 pb-4 mt-4">
          <h3 className="text-lg font-semibold">About</h3>
          <p>{profile?.description}</p>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-lg shadow-lg px-6 pt-8 pb-4 mt-4 mb-10">
          <h3 className="text-lg font-semibold">Experience</h3>
          {/* Replace with actual experience items */}
          <p>Vitality - Company</p>
          <p>QuicklyJobs - Previous role</p>
        </div>
      </div>
    </div>
    )
}