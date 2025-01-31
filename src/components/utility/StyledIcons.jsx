function DelMsgIcon({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        type="submit"
        className="ml-4 h-4 w-4 text-amber-600 hover:text-indigo-600
            focus:outline-none focus:ring-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </>
  );
}

export { DelMsgIcon };
