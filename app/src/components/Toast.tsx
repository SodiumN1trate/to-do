export default function Toast({
  message,
  success,
}: {
  message: string | null
  success: boolean
}) {
  if (message) {
    return (
      <div
        className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fadein-fadeout"
        role="alert"
        tabIndex="-1"
        aria-labelledby="hs-toast-success-example-label"
      >
        <div className="flex p-4">
          <div className="shrink-0">
            {success ? (
              <svg
                className="shrink-0 size-4 text-teal-500 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
            ) : (
              <svg
                className="shrink-0 size-4 text-red-500 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
              </svg>
            )}
          </div>
          <div className="ms-3">
            <p
              id="hs-toast-success-example-label"
              className="text-sm text-gray-700"
            >
              {message}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
