type AboutProps = {
    isMaximized: boolean
}

const About: React.FC<AboutProps> = ({ isMaximized }) => {
    return (
        <div
            className={`flex flex-col gap-[35px] px-5 sm:px-[70px] py-[30px]  h-full overflow-y-auto ${
                isMaximized ? 'pb-[100px] sm:pb-[50px]' : ''
            }`}
        >
            <div
                className={`flex sm:flex-row flex-col sm:gap-10 items-center sm:items-start justify-start`}
            >
                <div className=" flex flex-col sm:items-start items-center  gap-1 mt-4 sm:mt-14">
                    <h2
                        className={` font-extrabold ${
                            isMaximized ? ' text-[40px]' : 'text-[30px]'
                        }`}
                    >
                        Joacim Strandvide
                    </h2>
                    <h2
                        className={` font-extrabold ${
                            isMaximized ? ' text-[25px]' : 'text-[16px]'
                        }`}
                    >
                        Frontend Developer
                    </h2>
                </div>
            </div>

            <div>
                <h4 className=" font-bold pb-3">About Me</h4>
                <p>
                    Hello, I'm Joacim, a developer with a focus on React and
                    modern frontend apps. I also have a strong interest in
                    cybersecurity and scam baiting.
                </p>
            </div>
        </div>
    )
}

export default About
