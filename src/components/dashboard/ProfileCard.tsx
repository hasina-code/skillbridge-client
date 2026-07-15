"use client";

import { useState } from "react";
import ProfileEditModal from "./ProfileEditModal";


interface ProfileCardProps {
  user: {
    name: string;
    email: string;
    image?: string;
  };
}


export default function ProfileCard({ user }: ProfileCardProps) {

  const [image, setImage] = useState(user.image || "");
  const [openModal, setOpenModal] = useState(false);



  return (
    <>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">


        {/* Profile Image */}

        <div className="flex justify-center">

          <img
            src={
              image ||
              "https://i.ibb.co/2kRZJqM/user.png"
            }
            alt={user.name}
            className="h-32 w-32 rounded-full object-cover border-4 border-blue-500"
          />

        </div>




        {/* User Info */}

        <div className="mt-6 text-center">


          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {user.name}
          </h2>


          <p className="mt-2 text-slate-500 dark:text-slate-400">
            {user.email}
          </p>


        </div>




        {/* Edit Button */}

        <button
          onClick={() => setOpenModal(true)}
          className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Edit Profile Image
        </button>



      </div>




      {
        openModal && (

          <ProfileEditModal

            user={{
              ...user,
              image,
            }}

            onClose={() => setOpenModal(false)}

            onUpdate={(newImage)=> {
              setImage(newImage);
            }}

          />

        )
      }


    </>
  );
}