export default function Button({ children, ...props }) {
    return(
        <button className='bg-gray-500/75 hover:bg-gray-700/75 text-white font-bold p-5 py-3 px-6 rounded-lg' {...props}>
            {children}
        </button>
    )
}