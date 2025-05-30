import type { paginationProps } from "../types/pagination";


export default function Pagination({
  tasks,
  page,
  setPage
}: paginationProps) {


  return (
    <div className="flex max-w-[550px] m-auto justify-center gap-6 mb-7">
      {page != 1 && (
        <>
          <div className="cursor-pointer" onClick={() => setPage(prev => prev - 1)}>Prev</div>
          <div className="cursor-pointer" onClick={() => setPage(prev => prev - 1)}>{page - 1}</div>
        </>
      )}

      {<div className="cursor-pointer">{page}</div>}

      {page * 4 <= tasks.length && (
        <>
          <div className="cursor-pointer" onClick={() => setPage(prev => prev + 1)}>{page + 1}</div>
          <div className="cursor-pointer" onClick={() => setPage(prev => prev + 1)}>Next</div>
        </>
      )}
    </div>
  );
}
