import React from 'react';

function Intro() {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>Nicholas Dwenger</h1>
            <p className='text-base md:text-xl mb-3 font-medium'>Software Engineer & Web Developer</p>
            <p className='text-sm max-w-xl mb-6 font-bold'>
                I'm a full-stack developer and recent graduate from the University of Indianapolis. My goal is to make a difference in the digital world by building applications and websites that are meaningful and innovative. 
                All coding projects are built from the ground up, from designing, planning, and solving real world problems with my code.
                <br />
                I'm actively looking for employment and hope to join a company where I can put my skills and dedication to use. My strong problem-solving abilities, attention to detail, collaborative mindset, and eagerness to learn make me an excellent candidate for development roles. While I may not have extensive real-world work experience yet, I am a skilled engineer and developer with a solid educational foundation and practical project experience. I'm confident I can make a meaningful contribution to any company willing to take a chance on me. I'm a hardworking person with a love for growing and trying to be better each and every day. Feel free to visit my {' '}
                <a 
                    href="https://www.linkedin.com/in/nicholasdwenger/"
                    target='_blank'
                    className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
                    rel='nonreferrer noopener'
                >
                    LinkedIn Profile
                </a> {' '} 
                to see more information about me.
            </p>
        </div>
    )
}

export default Intro;