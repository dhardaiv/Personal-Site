"use client";

import Link from "./components/Link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const birthday = new Date('2005-07-26');
  const age = new Date().getFullYear() - birthday.getFullYear() - (new Date() < new Date(new Date().getFullYear(), birthday.getMonth(), birthday.getDate()) ? 1 : 0);

  const fadeInUpAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay: 0.5 },
  };

  return (
    <main>
      <title>daivik dhar</title>
      <meta name="description" content="a 19 year old aspiring software engineer from Toronto, CA." />
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex relative w-4/5 h-[70vh] p-4 inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>
        <motion.div className="flex flex-col gap-8 p-6 absolute h-[40vh] p-4 justify-center items-center text-zinc-400" {...fadeInUpAnimation}>
          <div className="flex flex-col gap-4 md:w-3/5 tracking-wide leading-relaxed text-zinc-400">
            <p className="text-4xl mb-4 font-medium">
              hey, i am <span className="text-blue-300">daivik.</span> 
            </p>
            <p>i am a {age} year old software engineer from Toronto, 🇨🇦 interested in all things programming.</p>
            <p>currently, i am tinkering with unsupervised and reinforcement learning algorithms, expanding on my frontend development skills and getting ready for my <a href="https://chem-eng.utoronto.ca/"><span className="text-blue-300">2F term in ce @ uoft</span></a>.</p>         
            <p>feel free to shoot me an email at <a href="mailto:vikdai217@gmail.com"><span className="text-blue-300">daivikdhar10@gmail.com</span></a>.</p>
            <p>checkout my links below:</p>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center items-center fixed bottom-6 w-full gap-8" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.75 }}
        >
          <Link href="https://www.linkedin.com/in/daivik-dhar-919483222/?originalSubdomain=ca"><FaLinkedin size={20}/></Link>
          <Link href="https://github.com/dhardaiv"><FaGithub size={20}/></Link>
        </motion.div>
      </div>
    </main>
  );
}
