
const TopLi = ({image,name,email}) => {
    return (
        <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
            <div className="shrink-0">
                <img
                    alt={name}
                    height="32"
                    src={image}
                    width="32"
                    className="rounded-full"
                />
            </div>
            <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{name}</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{email}</p>
            </div>
        </div>
    </li>
    );
};

export default TopLi;