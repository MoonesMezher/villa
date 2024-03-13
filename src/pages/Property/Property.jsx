import Container from "../../components/Container/Container"
import Hero from "../../components/Hero/Hero"
import Info from "../../components/Info/Info"
import BestDeal from "../Home/BestDeal/BestDeal"
import Accordion from '../../components/Accordion/Accordion'
import Img from '../../assets/imgs/single-property.jpg'
import Heading from "../../components/Heading/Heading"
import Box from "../../components/Box/Box"

const Property = () => {
    return (
        <div>
            <Hero/>
            <Container style={'bg-white py-20 px-2 min-[400px]:px-10 flex justify-center gap-20 max-[1200px]:flex-col'}>
                <div className="basis-[60%] max-[1200px]:basis-[100%]">
                    <div className="h-[500px]">
                        <img src={Img} alt={Img} className="w-full h-full object-cover"/>
                    </div>
                    <div className="my-10">
                        <Box text={'Appartment'}/>
                    </div>
                    <Heading text={'24 New Street Miami, OR 24560'} style={'text-[1.8rem]'}/>
                    <hr className="my-10"/>
                    <p>Get the best villa agency HTML CSS Bootstrap Template for your company website. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.
                    <br/><br/>
                    When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.
                    </p>
                    <Accordion/>
                </div>
                <div className='basis-[100%] max-[768px]:w-full min-[1200px]:basis-[30%]'>
                    <Info/>
                </div>
            </Container>
            <Container style={'bg-__gray py-20 px-2 min-[400px]:px-10 bg-__gray'}>
                <BestDeal/>
            </Container>
        </div>
    )
}

export default Property