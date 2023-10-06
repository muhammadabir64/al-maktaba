import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarDefault from '../Components/NavbarDefault';
import { Drawer, Button, Typography, Card, CardHeader, CardBody } from "@material-tailwind/react";


function HadithBooks() {
    const [open, setOpen] = React.useState(false);
    const [drawerData, setDrawerData] = useState(null);

    const openDrawer = (data) => {
        setDrawerData(data);
        setOpen(true);
    };
    const closeDrawer = () => {
        setOpen(false);
    };

    const [books, setBooks] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/data/hadith-books.json");
            const jsonData = await response.json();
            setBooks(jsonData);
        }
        fetchData();
    }, []);
    return (
        <React.Fragment>
            <NavbarDefault activePage="hadith_books" />
            <div className="container my-5">
            <div className="row">
            {books.map((book) => (
            <div className="col-6 col-md-3 mb-4">
            <Card className="p-1" style={{maxHeight: "400px"}}>
                <CardHeader shadow={false} floated={false} className="m-0">
                    <img src={book.cover}
                    alt="book cover"
                    className="h-full w-full object-cover" />
                </CardHeader>
                <CardBody className="p-1">
                    <Button
                    ripple={false}
                    fullWidth={true}
                    onClick={() => openDrawer(book)}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    ><Typography variant="span" color="blue-gray" className="font-bold">{book.name}</Typography></Button>
                </CardBody>
            </Card>
            </div>
            ))}

            <Drawer placement="right" open={open} onClose={closeDrawer} className="py-4 px-3">
            <div className="row">
                <div className="col-12 mb-4">
                <Typography variant="h4" className="text-center text-blue-gray-800 mb-2">
                    {drawerData?.name ?? "Loading..."}
                </Typography>
                <Typography variant="small" className="arab-font">
                    {drawerData?.description ?? ""}
                </Typography>
                </div>
                <div className="col-12">
                <Typography variant="h4" className="text-blue-gray-800">
                    <i className="fas fa-cloud-download-alt"></i> Download
                </Typography>
                <div className="border-t border-gray-300 mb-2 mt-1 bg-blue-gray-500"></div>
                <ul className="list-decimal text-blue-600 list-inside leading-loose">
                    {drawerData?.vol && drawerData.vol.map((vol, i) => (
                        <Link to={vol.link} key={i}><li className="border-b border-gray-300 py-1 hover:text-green-800 hover:scale-105 focus:scale-105">{vol.title}</li></Link>
                    ))}
                </ul>
                </div>
            </div>
            </Drawer>
            </div>
            </div>
        </React.Fragment>
    );
}

export default HadithBooks;