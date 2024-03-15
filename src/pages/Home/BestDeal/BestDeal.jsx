import OriginalBtn from "../../../components/Buttons/OriginalBtn/OriginalBtn";
import Title from "../../../components/Title/Title"
import Img1 from '../../../assets/imgs/deal-01.jpg';
import Img2 from '../../../assets/imgs/deal-02.jpg'
import Img3 from '../../../assets/imgs/deal-03.jpg'
import Deal from "../../../components/Deal/Deal";
import { useState } from "react";

const BestDeal = () => {
    const [filter, setFilter] = useState('Appartment');
    
    const btns = ['Appartment', 'Villa House', 'Penthouse'];

    const deals = [
        {
            'Appartment': {
                img: Img1,
                details: [
                    {
                        type: 'Total Flat Space',
                        value: '185 m2',
                    },
                    {
                        type: 'Floor number',
                        value: '26th',
                    },
                    {
                        type: 'Number of rooms',
                        value: 4,
                    },
                    {
                        type: 'Parking Available',
                        value: 'Yes',
                    },
                    {
                        type: 'Payment Process',
                        value: 'Bank',
                    },
                ],
                info: {
                    title: 'Extra Info About Property',
                    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.| When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.",
                    link: '/'
                }
            },
            'Villa House': {
                img: Img2,
                details: [
                    {
                        type: 'Total Flat Space',
                        value: '250 m2',
                    },
                    {
                        type: 'Floor number',
                        value: '26th',
                    },
                    {
                        type: 'Number of rooms',
                        value: 5,
                    },
                    {
                        type: 'Parking Available',
                        value: 'Yes',
                    },
                    {
                        type: 'Payment Process',
                        value: 'Bank',
                    },
                ],
                info: {
                    title: 'Detail Info About Villa',
                    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.| Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.",
                    link: '/'
                }
            },
            'Penthouse': {
                img: Img3,
                details: [
                    {
                        type: 'Total Flat Space',
                        value: '320 m2',
                    },
                    {
                        type: 'Floor number',
                        value: '34th',
                    },
                    {
                        type: 'Number of rooms',
                        value: 6,
                    },
                    {
                        type: 'Parking Available',
                        value: 'Yes',
                    },
                    {
                        type: 'Payment Process',
                        value: 'Bank',
                    },
                ],
                info: {
                    title: 'Extra Info About Penthouse',
                    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.| When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.",
                    link: '/'
                }
            },
        }
    ];

    return (
        <div className="flex flex-col gap-16">
            <div className="flex justify-between min-[1101px]:items-end max-[1100px]:flex-col gap-5">
                <Title title={'Best Deal'} discription={'Find Your Best Deal Right Now!'} style={'min-[769px]:mx-0'}/>
                <div className="flex justify-center gap-5 items-center flex-wrap">
                    {btns.map((btn, i) => <div key={i} onClick={(e) => setFilter(e.target.value)}>
                        <OriginalBtn text={btn}/>
                    </div>
                    )}
                </div>
            </div>
            {<Deal deal={deals[0][filter]}/>}
        </div>
    )
}

export default BestDeal