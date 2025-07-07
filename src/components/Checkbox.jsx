const Checkbox = ({ isComplete, checked, id }) => {
  return (
    <label
      className="flex items-center justify-center gap-2"
      htmlFor={id}
    >
      <span
        className="flex items-center justify-center h-5 w-5 rounded-[0.25em] border-[2px] border-[#008080] bg-transparent"
      >
        <input
          onClick={isComplete}
          className="peer appearance-none h-5 w-5"
          id={id}
          name={id}
          type="checkbox"
          checked={checked}
          readOnly
        />
        <svg
          viewBox="0 0 69 89"
          className="absolute pointer-events-none h-5 w-5 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
          fill="none"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1"
            strokeWidth="6px"
            stroke="#008080"
            pathLength="100"
          ></path>
        </svg>
      </span>
    </label>
  )
}

export default Checkbox