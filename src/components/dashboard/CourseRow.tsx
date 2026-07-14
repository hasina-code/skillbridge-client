"use client";


import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";


import {
Eye,
Pencil,
Trash2
} from "lucide-react";


import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";



export type Course = {

_id:string;
title:string;
thumbnail:string;
category:string;
level:string;
duration:string;
price:number;

shortDescription?:string;
description?:string;

};



export default function CourseRow({
course
}:{
course:Course
}){


const router = useRouter();


const [editOpen,setEditOpen]=useState(false);

const [deleteOpen,setDeleteOpen]=useState(false);

const [loading,setLoading]=useState(false);



const handleDelete = async()=>{

try{

setLoading(true);


await axios.delete(
`/api/courses/${course._id}`
);


toast.success(
"Course deleted successfully!"
);


setDeleteOpen(false);


router.refresh();


}

catch(error){

console.log(error);

toast.error(
"Failed to delete course."
);

}

finally{

setLoading(false);

}

};



return(

<>



<tr

className="
border-b

border-slate-200
dark:border-slate-800

transition

hover:bg-slate-100
dark:hover:bg-slate-900

"

>



<td className="px-6 py-4">


<div
className="
relative

h-14
w-24

overflow-hidden

rounded-xl
"
>


<Image

src={course.thumbnail}

alt={course.title}

fill

className="object-cover"

/>


</div>


</td>





<td

className="
px-6 py-4

font-semibold

text-slate-900
dark:text-white

"

>

{course.title}

</td>






<td className="px-6 py-4">


<span

className="
rounded-full

bg-cyan-500

px-3 py-1

text-xs

font-semibold

text-white
"

>

{course.category}

</span>


</td>





<td

className="
px-6 py-4

text-slate-600
dark:text-slate-300

"

>

{course.level}

</td>





<td

className="
px-6 py-4

font-semibold

text-cyan-600
dark:text-cyan-400

"

>

${course.price}

</td>






<td className="px-6 py-4">


<div

className="
flex

justify-center

gap-2

"

>


<Link

href={`/courses/${course._id}`}

className="
rounded-lg

bg-cyan-500

p-2

text-white

hover:bg-cyan-600

"

>

<Eye size={18}/>

</Link>



<button

onClick={()=>setEditOpen(true)}

className="
rounded-lg

bg-amber-500

p-2

text-white

hover:bg-amber-600

"

>

<Pencil size={18}/>

</button>




<button

onClick={()=>setDeleteOpen(true)}

className="
rounded-lg

bg-red-500

p-2

text-white

hover:bg-red-600

"

>

<Trash2 size={18}/>

</button>



</div>


</td>



</tr>




<EditModal

isOpen={editOpen}

onOpenChange={setEditOpen}

course={course}

/>




<DeleteModal

isOpen={deleteOpen}

loading={loading}

onClose={()=>setDeleteOpen(false)}

onConfirm={handleDelete}

/>



</>


)

}