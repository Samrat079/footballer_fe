interface Option_type {
  options_for: string
  option_array: string[]
}

const Datalist_comp_01 = ({ options_for, option_array }: Option_type) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <label
        htmlFor={options_for}
        className="text-sm font-medium text-gray-700"
      >
        {options_for}
      </label>

      <input
        id={options_for}
        name={options_for}
        list={`${options_for}-list`}
        placeholder={option_array[0]}
        className="
          w-full
          rounded-lg
          border border-gray-300
          bg-white
          px-3 py-2
          text-sm
          shadow-sm
          transition
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
        "
      />

      <datalist id={`${options_for}-list`}>
        {option_array.map((option) => (
          <option key={option} value={option} />
        ))}
      </datalist>
    </div>
  )
}

export default Datalist_comp_01