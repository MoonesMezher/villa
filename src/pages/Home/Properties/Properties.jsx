import Title from "../../../components/Title/Title"
import Prop1 from '../../../assets/imgs/property-01.jpg'
import Prop2 from '../../../assets/imgs/property-02.jpg'
import Prop3 from '../../../assets/imgs/property-03.jpg'
import Prop4 from '../../../assets/imgs/property-04.jpg'
import Prop5 from '../../../assets/imgs/property-05.jpg'
import Prop6 from '../../../assets/imgs/property-06.jpg'
import PropertyCard from "../../../components/PropertyCard/PropertyCard"

const Properties = () => {
    const properties = [
        {
            img: Prop1,
            link: '/single-property',
            type: 'Luxury Villa',
            price: '2.264.000',
            location: '18 New Street Miami, OR 97219',
            details: {
                bedrooms: 8,
                bathrooms: 8,
                area: 545,
                floor: 4,           
                parking: 6,
            }
        },
        {
            img: Prop2,
            link: '/single-property',
            type: 'Luxury Villa',
            price: '1.180.000',
            location: '54 Mid Street Florida, OR 27001',
            details: {
                bedrooms: 6,
                bathrooms: 5,
                area: 450,
                floor:4,           
                parking: 8,
            }
        },
        {
            img: Prop3,
            link: '/single-property',
            type: 'Luxury Villa',
            price: '1.460.000',
            location: '26 Old Street Miami, OR 38540',
            details: {
                bedrooms: 5,
                bathrooms: 4,
                area: 225,
                floor: 4,           
                parking: 10,
            }
        },
        {
            img: Prop4,
            link: '/single-property',
            type: 'Apartment',
            price: '584.500',
            location: '12 New Street Miami, OR 12650',
            details: {
                bedrooms: 4,
                bathrooms: 3,
                area: 125,
                floor: 25,
                parking: 2
            }
        },
        {
            img: Prop5,
            link: '/single-property',
            type: 'Penthouse',
            price: '925.600',
            location: '34 Beach Street Miami, OR 42680',
            details: {
                bedrooms: 4,
                bathrooms: 4,
                area: 180,
                floor: 38,
                parking: 2
            }
        },
        {
            img: Prop6,
            link: '/single-property',
            type: 'Modern Condo',
            price: '450.000',
            location: '22 New Street Portland, OR 16540',
            details: {
                bedrooms: 3,
                bathrooms: 2,
                area: 165,
                floor: 26,
                parking: 3
            }
        },
    ];

    return (
        <div className="text-center">
            <Title title={'PROPERTIES'} discription={'We Provide The Best Property You Like'}/>
            <div className="flex justify-center gap-10 flex-wrap mt-20 mb-5">
                {properties.map((prop, i) => <PropertyCard key={i} prop={prop}/>)}
            </div>
        </div>
    )
}

export default Properties