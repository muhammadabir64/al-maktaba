import React from 'react';
import NavbarDefault from '../Components/NavbarDefault';
import ApiBlocks from '../Components/ApiBlocks';
import { Typography } from "@material-tailwind/react";


function API() {
    return (
        <React.Fragment>
            <NavbarDefault activePage="api" />
            <div className="container my-5">
            <div className="row">
                <div className="col-12 text-center">
                <Typography
                variant="h2"
                className="text-center text-blue-gray-600"
                ><i class="fas fa-code-branch" style={{ transform: 'rotate(85deg)' }}></i> API</Typography>
                <Typography
                variant="p"
                color="blue-gray"
                className="text-center"
                >Access JSON data for Surahs, Duas, Asma-ul-Husna, and more through our API. Our API provides a wide range of data to support your applications and services.</Typography>
                </div>
                <div className="col-12 mt-3">
                <div className="row">
                    <ApiBlocks title="Asma-ul-Husna" description="Explore the divine 'Beautiful Names' of Allah (God) in Islam. Access meanings and attributes for spiritual reflection." url="asma-ul-husna.json" />
                    <ApiBlocks title="Al-Quran" description="Access the holy Quran, the sacred scripture of Islam, with ease. Retrieve verses, translations, and more for spiritual enlightenment." url="al-quran.json" />
                    <ApiBlocks title="Hadith Books" description="Explore essential Hadith collections for insights into the teachings of Prophet Muhammad (peace be upon him). Access authentic narrations and valuable knowledge." url="hadith-books.json" />
                    <ApiBlocks title="Duas" description="Discover significant supplications (Duas) in Islam for blessings and guidance. Access a collection of important prayers for various occasions." url="dua.api" />
                    <ApiBlocks title="Alphabets" description="Access data related to the Arabic alphabets, comprising 28 fundamental characters. Ideal for educational and language-related applications." url="alphabet.json" />
                </div>
                </div>
            </div>
            </div>

        </React.Fragment>
    );
}

export default API;