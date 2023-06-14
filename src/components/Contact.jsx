import { useEffect,useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../HigherOrder"
import { slideIn } from "../utils/motion"





const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:''
  })  
const [loading, setLoading] = useState(false)
const handleChange = (e) => {
  const {name,value} = e.target

  setForm({...form, [name]:value})

}
const handleSubmit = (e) => {
  e.preventDefault()
  setLoading(true)

  emailjs.send('service_j23i82w','template_9bp9iaf',{
    from_name:form.name,
    to_name:'Sachin',
    from_email:form.email,
    to_email:'elzachin373@gmail.com',
    message:form.message,
  },'zEtE2ea-Q77xGX26k').then(()=>{
    setLoading(false)
    alert('Thank you I will be replying ASAP')
    setForm({
      name:'',
      email:'',
      message:''
    })
  }, (error) => {
    setLoading(false)
    console.log(error)
    alert('something went wrong')
  })
}
  return (
    <div 
    className="xl:mt-12 
    xl:flex-row 
    flex-col-reverse 
    flex gap-10 
    overflow-hidden">
      <motion.div
        variants={slideIn('left','tween',0.2,1)}
        className="
        flex-[0.75] 
        bg-black-100 
        p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`} >Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}></h3>
        <form 
          ref={formRef} 
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8" 
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your name
            </span>
            <input type="text" name="name" placeholder="What's your name" value={form.name} onChange={(e)=> handleChange(e)}
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
          </label>

          <label className="flex flex-col">
            <span className="
            text-white 
            font-medium 
            mb-4">
              Your email
            </span>
            <input type="text" name="email" placeholder="What's your email" value={form.email} onChange={(e)=> handleChange(e)}
            className="
            bg-tertiary 
            py-4 px-6 
            placeholder:text-secondary 
            text-white rounded-lg 
            outlined-none 
            border-none 
            font-medium"/>

          </label>
          <label className="flex flex-col">
            <span className="
            text-white 
            font-medium 
            mb-4">
              Your message
            </span>
            <textarea
            rows="7" 
            type="text" 
            name="message" 
            placeholder="What's your message" 
            value={form.message} 
            onChange={(e)=> handleChange(e)}
            className="
            bg-tertiary 
            py-4 px-6 
            placeholder:text-secondary 
            text-white rounded-lg 
            outlined-none 
            border-none font-medium"/>
          </label>
          <button
          type="submit"
          className="bg-teriary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primay rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right','tween',0.2,1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"")