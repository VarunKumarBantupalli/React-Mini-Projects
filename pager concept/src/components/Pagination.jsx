import React from 'react'

const Pagination = ({ data, pageHandler }) => {

    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(data.length / 10); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <center>
                {pageNumbers.map((page) => {
                    return (
                        <button key={page} onClick={() => pageHandler(page)}
                            className="btn bg-black text-white p-2 m-2 hover:bg-slate-500">{page}</button>
                    )

                })}
            </center>

        </div>
    )
}

export default Pagination
