import { Link } from "react-router-dom"
import {BsGoogle} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BiLogoFacebook} from "react-icons/bi"
import {BiLogoLinkedin} from "react-icons/bi"
import * as yup from "yup"
import {useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers"

const Register = () => {

    const schema = yup.object({
        userName: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required(),
        confirm: yup.string().oneOf([yup.ref("password")]),
    })

    const {
        formState:{errors},
        register,
        handleSubmit
    } = useForm({
        resolver:yupResolver(schema)
    })

    const onSubmit = handleSubmit(async(data)=>{
        const {userName, email, password} = data;
        Register()
        console.log((data))
    })
  return (
    <div className="w-[100%] h-[100vh] bg-[aqua] flex items-center justify-center ">
        
        <form className="w-[500px]  bg-[white] rounded p-5"
        onSubmit={onSubmit}>
        <div className="text-center text-[18px] text-[#9c9393] font-semibold ">Register</div>
            <div className="w-[450px] h-[50px] mt-6 border-[1px] border-[silver] rounded ">
                <input className="w-[440px] h-[35px] outline-none p-1 text-[15px] font-semibold text-[silver]  "
                 type="text"
                 placeholder="userName"
                 {...register("userName")}
                 />

            </div>
            
            <div className="w-[450px] h-[50px] mt-6  border-[1px] border-[silver] rounded ">
                <input className="w-[440px] h-[35px] outline-none p-1 text-[15px] font-semibold text-[silver]  "
                 type="email"
                 placeholder="email"
                 {...register("email")}
                 />
            </div>
            <div className="w-[450px] h-[50px] mt-6  border-[1px] border-[silver] rounded ">
                <input className="w-[440px] h-[35px] outline-none p-1 text-[15px] font-semibold text-[silver]  "
                 type="password"
                 placeholder="password"
                 {...register("password")}
                 />
            </div>
            <div className="w-[450px] h-[50px] mt-6  border-[1px] border-[silver] rounded ">
                <input className="w-[440px] h-[35px] outline-none p-1 text-[15px] font-semibold text-[silver]  "
                 type="password"
                 placeholder="confirm"
                 {...register("cofirm")}
                 />
            </div>
            {/* buuton part */}
            <button className="text-center text-[15px] text-[white] font-semibold w-[100%] h-[50px] bg-[aqua] rounded mt-6   "
            type="submit">Register</button>           
            {/* end buuton part */}
            <div className="w-[100%] h-[30px] border-b-2  "></div>
            {/* signin */}
            <div className="mt-[10px]">
                <div className="text-center text-[13px] text-[#9c9393] ">Already have an account?</div>
               <Link to="/sign-in"> <div className="text-center text-[13px] text-[#9c9393] ">sign in</div></Link>
            </div>
            {/* signin */}

           <div className="flex">
           <div className="">
                <BsGoogle/>
            </div>
            <div>
                <BsTwitter/>
            </div>
            <div>
                <BiLogoFacebook/>
            </div>
            <div>
                <BiLogoLinkedin/>
            </div>
           </div>
        </form>
    </div>
  )
}

export default Register