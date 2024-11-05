const customIcon = (color: string) => {
    return (
        <div className={`flex justify-center w-5 h-5 md:w-10 md:h-10 items-center bg-black border-4 border-${color}-500 rounded-md md:rounded-xl`}>
            <div className={`w-2 h-2 md:w-4 md:h-4 rounded-full bg-${color}-500`}></div>
        </div>
    )
}

export default customIcon;