interface buttonProps {
    color: string,
    text: string,
}

export default function Button(props: buttonProps) {
    return (
        <div>
            <button className={`bg-${props.color}-500 w-full text-white rounded-xl p-2 md:p-4 font-bold text-lg sm:text-xl md:text-3xl lg:text-5xl`}>{props.text}</button>
        </div>
    )
}