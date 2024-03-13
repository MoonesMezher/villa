import Hero from "../../components/Hero/Hero"
import Container from "../../components/Container/Container"
import Prop1 from '../../assets/imgs/property-01.jpg'
import Prop2 from '../../assets/imgs/property-02.jpg'
import Prop3 from '../../assets/imgs/property-03.jpg'
import Prop4 from '../../assets/imgs/property-04.jpg'
import Prop5 from '../../assets/imgs/property-05.jpg'
import Prop6 from '../../assets/imgs/property-06.jpg'
import PropertyCard from "../../components/PropertyCard/PropertyCard"
import OriginalBtn from "../../components/Buttons/OriginalBtn/OriginalBtn"
import { useState } from "react"

const PropertiesPage = () => {
    const [filter, setFilter] = useState('Show All');

    const propertiesJson = [
        {
            img: Prop1,
            link: '/property',
            type: 'Luxury Villa',
            price: '2.264.000',
            location: '18 New Street Miami, OR 97219',
            details: {
                bedrooms: 8,
                bathrooms: 8,
                area: 545,
                floor: 4,           
                parking: 6,
            },
            key: 'Villa House'
        },
        {
            img: Prop2,
            link: '/property',
            type: 'Luxury Villa House',
            price: '1.180.000',
            location: '54 Mid Street Florida, OR 27001',
            details: {
                bedrooms: 6,
                bathrooms: 5,
                area: 450,
                floor:4,           
                parking: 8,
            },
            key: 'Villa House'
        },
        {
            img: Prop3,
            link: '/property',
            type: 'Luxury Villa House',
            price: '1.460.000',
            location: '26 Old Street Miami, OR 38540',
            details: {
                bedrooms: 5,
                bathrooms: 4,
                area: 225,
                floor: 4,           
                parking: 10,
            },
            key: 'Villa House'
        },
        {
            img: Prop4,
            link: '/property',
            type: 'Apartment',
            price: '584.500',
            location: '12 New Street Miami, OR 12650',
            details: {
                bedrooms: 4,
                bathrooms: 3,
                area: 125,
                floor: 25,
                parking: 2
            },
            key: 'Apartment'
        },
        {
            img: Prop5,
            link: '/property',
            type: 'Penthouse',
            price: '925.600',
            location: '34 Beach Street Miami, OR 42680',
            details: {
                bedrooms: 4,
                bathrooms: 4,
                area: 180,
                floor: 38,
                parking: 2
            },
            key: 'Penthouse'
        },
        {
            img: Prop6,
            link: '/property',
            type: 'Modern Condo',
            price: '450.000',
            location: '22 New Street Portland, OR 16540',
            details: {
                bedrooms: 3,
                bathrooms: 2,
                area: 165,
                floor: 26,
                parking: 3
            },
            key: 'Villa House'
        },
        {
            img: Prop1,
            link: '/property',
            type: 'Luxury Villa House',
            price: '2.264.000',
            location: '18 New Street Miami, OR 97219',
            details: {
                bedrooms: 8,
                bathrooms: 8,
                area: 545,
                floor: 4,           
                parking: 6,
            },
            key: 'Villa House'
        },
        {
            img: Prop2,
            link: '/property',
            type: 'Luxury Villa House',
            price: '1.180.000',
            location: '54 Mid Street Florida, OR 27001',
            details: {
                bedrooms: 6,
                bathrooms: 5,
                area: 450,
                floor:4,           
                parking: 8,
            },
            key: 'Villa House'
        },
        {
            img: Prop3,
            link: '/property',
            type: 'Luxury Villa House',
            price: '1.460.000',
            location: '26 Old Street Miami, OR 38540',
            details: {
                bedrooms: 5,
                bathrooms: 4,
                area: 225,
                floor: 4,           
                parking: 10,
            },
            key: 'Villa House'
        },
        {
            img: Prop4,
            link: '/property',
            type: 'Apartment',
            price: '584.500',
            location: '12 New Street Miami, OR 12650',
            details: {
                bedrooms: 4,
                bathrooms: 3,
                area: 125,
                floor: 25,
                parking: 2
            },
            key: 'Apartment'
        },
        {
            img: Prop5,
            link: '/property',
            type: 'Penthouse',
            price: '925.600',
            location: '34 Beach Street Miami, OR 42680',
            details: {
                bedrooms: 4,
                bathrooms: 4,
                area: 180,
                floor: 38,
                parking: 2
            },
            key: 'Penthouse'
        },
        {
            img: Prop6,
            link: '/property',
            type: 'Modern Condo',
            price: '450.000',
            location: '22 New Street Portland, OR 16540',
            details: {
                bedrooms: 3,
                bathrooms: 2,
                area: 165,
                floor: 26,
                parking: 3
            },
            key: 'Villa House'
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = propertiesJson.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (currentPage < Math.ceil(propertiesJson.length / itemsPerPage)) {
        setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const lastPage = () => {
        setCurrentPage(Math.ceil(propertiesJson.length / itemsPerPage));
    };
    
    const btns = ['Show All', 'Apartment', 'Villa House', 'Penthouse'];

    

    return (
        <div>
            <Hero/>
            <Container style={'py-32'}>
                <div className="flex justify-center gap-5 items-center flex-wrap">
                    {btns.map((btn, i) => <div key={i} onClick={(e) => setFilter(e.target.value)}>
                        <OriginalBtn text={btn} style={(btn == filter) && 'bg-__orange'}/>
                    </div>
                    )}
                </div>
                <div className="flex justify-center gap-10 flex-wrap mt-20 mb-5">
                    {currentItems.map((prop, i) => 
                        filter === 'Show All'? <PropertyCard key={i} prop={prop}/>
                        : (prop.key === filter) && <PropertyCard key={i} prop={prop}/>
                    )}
                </div>
                <div className="flex justify-center gap-5 items-center mt-16 mb-5">
                    <button disabled={currentPage === 1} onClick={() => prevPage()} className="flex items-center justify-center bg-black w-10 h-10 p-3 rounded-full cursor-pointer hover:bg-__orange focus:bg-__orange duration-300 text-white">{"<"}</button>
                    <button disabled={currentPage === Math.ceil(propertiesJson.length / itemsPerPage)} onClick={() => nextPage()} className="flex items-center justify-center bg-black w-10 h-10 p-3 rounded-full cursor-pointer hover:bg-__orange focus:bg-__orange duration-300 text-white">{'>'}</button>
                    <button onClick={() => lastPage()} className="flex items-center justify-center bg-black w-10 h-10 p-3 rounded-full cursor-pointer hover:bg-__orange focus:bg-__orange duration-300 text-white">{'>>'}</button>
                </div>
            </Container>
        </div>
    )
}

export default PropertiesPage