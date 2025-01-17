import React from 'react';
import ProfileImage from '../../assets/profileImage.jpg';

const Profile = () => {
    return (
        <div className='bg-gradient-to-b from-slate-900 to-teal-900 h-screen text-white text-center py-16'>
            <h1 className='text-4xl font-bold mb-8'>
                Hello, I'm {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500'>Joshua Zyzak</span>
            </h1>
            <img className="mx-auto mb-8 w-60 h-60 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" src={ProfileImage} alt=""></img>
            <p className='mt-8 px-28 text-2xl text-gray-300'>
                Welcome to my website! I am currently a first year student at Harvard studying EECS and Statistics. I love taking on the toughest challenges and
                problems that I can, and I am always looking for new ventures or projects to tackle.
            </p>
            <p className='mt-8 px-28 text-2xl text-gray-300'>
                Currently, I am working on research at Harvard focusing on using Reinforced Learning and creating a pipeline from the robots in simulation to the
                actual robots in lab. Through the Harvard Undergraduate Machine Intelligence Community (HUMIC), I have been working on a web application dedicated to
                improving the legislative research experience and simplifying it to improve the general public's understanding. Furthermore, through Harvard Computer Society
                (HCS) AI's ClubHub project, I have been working on a web application to improve the club experience at Harvard by making it much easier for students to find 
                and research clubs that align with their own interests and values. Lastly, I am also working on ventures in the startup space as the Technical Lead for 
                NextCreator.
            </p>
            <p className='mt-8 px-28 text-2xl text-gray-300'>
                I am always looking for new projects or ventures to take on! Feel free to <span className='font-bold'>reach out</span> with any ideas or projects 
                that you have in mind!
            </p>
        </div>
    )
}

export default Profile