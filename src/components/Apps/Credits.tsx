type CreditProps = {
    isMaximized: boolean
}

const Credits: React.FC<CreditProps> = ({ isMaximized }) => {
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
                        className={` font-bold ${
                            isMaximized ? ' text-[30px]' : 'text-[20px]'
                        }`}
                    >
                        This portfolio was inspired by several windows 95
                        projects
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Credits
