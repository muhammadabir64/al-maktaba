import React, { useState, useEffect } from 'react';
import { useNavigate   } from 'react-router-dom';
import NavbarDefault from '../Components/NavbarDefault';
import { Typography } from "@material-tailwind/react";

function SurahLish() {
    const navigate = useNavigate();
    const table_head = ["#", "Name", "Translation", "Verses", "Type"];
    const [table_data, setTable_data] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/data/al-quran.json");
            const jsonData = await response.json();
            setTable_data(jsonData);
        }
        fetchData();
    }, []);

    const handleRowClick = (name) => {
        const surah_name = name.toLowerCase();
        navigate(`/surah/${surah_name}`);
    };
    return (
        <React.Fragment>
        <NavbarDefault activePage="surah" />
        <div className="container my-5">
            <Typography
            variant="h2"
            color="blue-gray"
            className="text-center mb-3"
            >Quran Transliteration</Typography>
            <table className="w-full table-auto text-center bg-white shadow-md">
                <thead>
                <tr>
                    {table_head.map((head) => (
                    <th
                        key={head}
                        className="border-b border-blue-dark-100 bg-blue-gray-50 p-4"
                    >
                        <Typography
                        variant="medium"
                        color="blue-gray"
                        className="font-bold leading-none opacity-70"
                        >
                        {head}
                        </Typography>
                    </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {table_data.map(({ id, name, transliteration, translation, total_verses, type }, index) => {
                    const isLast = index === table_data.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
        
                    return (
                    <tr key={id}
                        onClick={() => handleRowClick(transliteration)}
                        style={{ cursor: 'pointer' }}>
                        <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {id}
                        </Typography>
                        </td>
                        <td className={classes}>
                        <Typography
                            variant="medium"
                            color="blue-gray"
                            className="font-normal arab-font"
                        >
                            {name}
                        </Typography>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {transliteration}
                        </Typography>
                        </td>
                        <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {translation}
                        </Typography>
                        </td>
                        <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {total_verses}
                        </Typography>
                        </td>
                        <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </Typography>
                        </td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
        </React.Fragment>
    );
}

export default SurahLish;