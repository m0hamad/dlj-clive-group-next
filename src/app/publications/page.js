'use client'
import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx';
import Banner from '../../components/Banner/Banner'
import './publications.css'
import patents from '../../../public/files/patents.json'
import encyclopediaArticles from '../../../public/files/encyclopediaArticles.json'
import Image from 'next/image';

const Publications = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const file = await fetch('./Publications.xlsx');
            const data = await file.arrayBuffer();
            const workbook = XLSX.read(data, { type: 'binary' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet)
            setData(jsonData);
        }

        fetchData()
            .catch(console.error);

    }, [])

    return (
        <>
            <Banner text="Publications" />
            <div>
                <ol className='publication-ol' >
                    {data.map(({ Title, Authors, Publishers, Year, Volume, Pages, DOI }, idx) =>
                        <li className='publication-li' style={{ listStylePosition: 'inside', }} key={idx}>

                            <span>
                                {Title && <span lang='de' style={{ hyphens: 'auto' }} dangerouslySetInnerHTML={{ __html: Title }} />}
                                {Authors && `${idx > 206 ? '.' : ','} ${Authors}`}
                                {Publishers && <i> {Publishers}</i>}
                                {Year && <b> {Year}</b>}
                                {Volume && `, ${Volume}`}
                                {Pages && `, ${Pages}`}
                                {DOI && <><span> (</span><a className='doi-url' target='_blank' href={DOI}>DOI</a><span>)</span></>}
                                .
                            </span>
                            <div>
                                <img
                                    className='row-img hide-me'
                                    src={`./images/publications-images/${idx + 1}.png`}
                                    onLoad={(event) => event.currentTarget.classList.remove('hide-me')}
                                />
                            </div>
                        </li>
                    )

                    }
                </ol>
            </div>
            <br />
            <h2 className='publications-h2' >Patents</h2>
            <hr className='publications-hr' />
            <ol>
                {
                    patents.map((p, idx) =>
                        <li
                            dangerouslySetInnerHTML={{ __html: p.text }}
                            style={{ listStylePosition: 'inside', }}
                            key={idx}
                        />
                    )
                }
            </ol>
            <br />
            <h2 className='publications-h2' >Encyclopedia Articles</h2>
            <hr className='publications-hr' />
            <ol>
                {
                    encyclopediaArticles.map((ea, idx) =>
                        <li
                            dangerouslySetInnerHTML={{ __html: ea.text }}
                            style={{ listStylePosition: 'inside', }}
                            key={idx}
                        />
                    )
                }
            </ol>
        </>
    )
}

export default Publications