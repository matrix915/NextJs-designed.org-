import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Pagination({ totalPage }) {
    const query = useRouter().query;
    const page = query.page ? parseInt(query.page) : 1;
    let indexsToShow = [];

    for (let i = 0; i < Math.min(totalPage, 3); i++) {
        if (page < 4 || page > totalPage - 3) {
            if (page < 4) {
                indexsToShow[i] = i + 1;
            }

            if (totalPage > 4 && page > totalPage - 3) {
                indexsToShow[i] = totalPage - 2 + i;
            }
        } else {
            indexsToShow[i] = page - 1 + i;
        }
    }

    return (
        <>
            {totalPage > 1 &&
                <ul className="pagination toolbox-item flex items-center justify-center">
                    {
                        page > 1 &&
                        <li className="page-item mx-1">
                            <Link href={{ query: { ...query, page: page - 1 } }} scroll={false}>
                                <a href='#' className="flex items-center justify-center w-[40px] h-[40px] page-link page-link-btn"><svg class="flex-shrink-0 h-6 w-6 text-gray-500 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></a>
                            </Link>
                        </li>
                    }
                    {
                        indexsToShow.map(item => (
                            <li className={`page-item mx-1 ${page === item ? 'active' : ''}`} key={`page-${item}`}>
                                <Link className="page-link" href={{ query: { ...query, page: item } }} scroll={false}>
                                    <a href='#' className="flex items-center justify-center w-[40px] h-[40px]">{item}{page === item && <span className="sr-only">(current)</span>}</a>
                                </Link>
                            </li>

                        ))
                    }

                    {
                        page < totalPage &&
                        <li className="page-item mx-1">
                            <Link href={{ query: { ...query, page: page + 1 } }} scroll={false}>
                                <a href='#' className="flex items-center justify-center w-[40px] h-[40px] page-link page-link-btn"><svg class="flex-shrink-0 h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></a>
                            </Link>
                        </li>
                    }
                </ul>
            }
        </>
    )
}

export default React.memo(Pagination);