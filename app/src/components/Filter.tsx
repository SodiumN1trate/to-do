interface FilterPropsType {
  refetch: (completed?: boolean) => void
}

export function Filter(props: FilterPropsType) {
  return (
    <div className="relative flex w-full flex-col rounded-xl bg-white shadow">
      <nav className="flex min-w-[240px] flex-row gap-1 p-2">
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          <label
            htmlFor="filter-all"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center cursor-pointer"
                htmlFor="filter-all"
              >
                <input
                  name="filter"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                  id="filter-all"
                  defaultChecked={true}
                  onChange={() => props.refetch()}
                />
                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <label
                className="ml-2 text-slate-600 cursor-pointer text-sm"
                htmlFor="filter-all"
              >
                All
              </label>
            </div>
          </label>
        </div>
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          <label
            htmlFor="filter-active"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center cursor-pointer"
                htmlFor="filter-active"
              >
                <input
                  name="filter"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                  id="filter-active"
                  onChange={() => props.refetch(false)}
                />
                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <label
                className="ml-2 text-slate-600 cursor-pointer text-sm"
                htmlFor="filter-active"
              >
                Active
              </label>
            </div>
          </label>
        </div>
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          <label
            htmlFor="filter-completed"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center cursor-pointer"
                htmlFor="filter-completed"
              >
                <input
                  name="filter"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                  id="filter-completed"
                  onChange={() => props.refetch(true)}
                />
                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <label
                className="ml-2 text-slate-600 cursor-pointer text-sm"
                htmlFor="filter-completed"
              >
                Completed
              </label>
            </div>
          </label>
        </div>
      </nav>
    </div>
  )
}
