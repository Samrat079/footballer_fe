const Feature_cards_01 = ({title, body}: {title: string, body: string}) => {
    return (
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-sm text-gray-600 mt-4">
                {body}
            </p>
        </div>
    )
}

export default Feature_cards_01