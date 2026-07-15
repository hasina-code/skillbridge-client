"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface ProfileEditModalProps {
  user: {
    name: string;
    email: string;
    image?: string;
  };
  onClose: () => void;
  onUpdate: (image: string) => void;
}

export default function ProfileEditModal({
  user,
  onClose,
  onUpdate,
}: ProfileEditModalProps) {
  
  const [image, setImage] = useState(user.image || "");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async () => {

    if (!image) {
      toast.error("Please enter image URL");
      return;
    }


    try {

      setLoading(true);


      const res = await axios.put("/api/users", {
        email: user.email,
        image,
      });


      toast.success("Profile image updated successfully");


      onUpdate(res.data.image);

      onClose();


    } catch (error) {

      console.error(error);

      toast.error("Failed to update profile image");

    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">


      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl dark:bg-slate-900">


        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Edit Profile Image
        </h2>



        {/* Name */}

        <div className="mb-4">

          <label className="mb-1 block text-sm text-slate-500">
            Name
          </label>

          <input
            value={user.name}
            disabled
            className="w-full rounded-xl border bg-slate-100 p-3 dark:bg-slate-800"
          />

        </div>




        {/* Email */}

        <div className="mb-4">

          <label className="mb-1 block text-sm text-slate-500">
            Email
          </label>

          <input
            value={user.email}
            disabled
            className="w-full rounded-xl border bg-slate-100 p-3 dark:bg-slate-800"
          />

        </div>




        {/* Image */}

        <div>

          <label className="mb-1 block text-sm text-slate-500">
            Profile Image URL
          </label>


          <input
            type="text"
            value={image}
            onChange={(e)=>setImage(e.target.value)}
            placeholder="Enter image URL"
            className="w-full rounded-xl border p-3 dark:bg-slate-800"
          />

        </div>




        {/* Preview */}

        {image && (
          <img
            src={image}
            alt="profile preview"
            className="mt-5 h-24 w-24 rounded-full object-cover"
          />
        )}




        {/* Buttons */}

        <div className="mt-6 flex justify-end gap-3">


          <button
            onClick={onClose}
            className="rounded-xl border px-5 py-2"
          >
            Cancel
          </button>



          <button
            onClick={handleSubmit}
            disabled={loading}
            className="rounded-xl bg-blue-600 px-5 py-2 text-white"
          >

            {loading ? "Updating..." : "Save"}

          </button>


        </div>


      </div>


    </div>

  );
}