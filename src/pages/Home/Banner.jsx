// 
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Team1 from "../../assets/team/team1.jpg";
import Team2 from "../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[500px]">
      <div className="hero-content flex-col-reverse lg:flex-row gap-12">

        {/* Images Section */}
        <div className="flex-1 relative flex justify-center items-center">

          <motion.img
            src={Team1}
            alt="Team collaboration"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="max-w-xs md:max-w-sm border-blue-600 border-l-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />

          <motion.img
            src={Team2}
            alt="Team meeting"
            animate={{ x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-30px] right-0 max-w-xs md:max-w-sm border-blue-600 border-l-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />

        </div>

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Find Your Dream{" "}
            <motion.span
              animate={{
                color: ["#2563eb", "#9333ea", "#2563eb"],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              Remote Jobs
            </motion.span>{" "}
            Today
          </motion.h1>

          <p className="py-6 text-base-content/70 max-w-lg mx-auto lg:mx-0">
            Discover thousands of remote opportunities from top companies
            worldwide. Work from anywhere and build the career you love.
          </p>

          <button className="btn btn-primary px-8">
            Get Started
          </button>

        </div>
      </div>
    </div>
  );
};

export default Banner;

// eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";
// import Team1 from "../../assets/team/team1.jpg"
// import Team2 from "../../assets/team/team2.jpg"


// const Banner = () => {
//   return (
//         <div className="hero bg-base-200 min-h-96">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//             <div className="flex-1">
//                 <motion.img
//                 animate={{y:[100,150,100]}}
//                 transition={{duration:5,repeat:Infinity}}
//                  src={Team1} alt="Team 1"
//                 className="max-w-sm border-blue-600 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
//                 />
//                 <motion.img
//                 animate={{x:[100,150,100]}}
//                 transition={{duration:10,delay:5,repeat:Infinity}}
//                  src={Team2} alt="Team 2"
//                 className="max-w-sm border-blue-600 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
//                 />
                
//             </div>
//             <div className="flex-1">
//             {/* <motion.h1 
//                 animate={{
//                     rotate:180,
//                     x: 200,
//                     y: -200,
//                     transition:{duration:4}
//                 }}
//                 className="text-5xl font-bold">Latest Jobs For You!

//             </motion.h1> */}
//             <motion.h4 
//                 initial={{ scale: 0 }} animate={{ scale: 1,transition: 4 }}
//                 className="text-5xl font-bold">Remote <motion.span
//                 animate={{
//                     color:['#fc5a03','#1c03fc'],
//                     transition:{duration:4,repeat:Infinity}
//                     }}
//                 >Jobs</motion.span> For You!
//             </motion.h4>
//             <p className="py-6">
//                 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
//                 quasi. In deleniti eaque aut repudiandae et a id nisi.
//             </p>
//             <button className="btn btn-primary">Get Started</button>
//             </div>
//         </div>
//         </div>
//   )
// }

// export default Banner