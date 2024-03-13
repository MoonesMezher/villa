import Container from "../../components/Container/Container"
import SwiperComponent from "../../components/Swiper/SwiperComponent"
import VideoView from "./VideoView/VideoView"
import Featured from "./Featured/Featured"
import BestDeal from "./BestDeal/BestDeal"
import Properties from "./Properties/Properties"
import Contact from "./Contact/Contact"

const Home = () => {
    return (
        <>
            <Container>
                <SwiperComponent/>
            </Container>
            <Container style={'py-20 md:px-6 max-[768px]:px-2'}>
                <Featured/>
            </Container>
            <Container>
                <VideoView/>
            </Container>
            <Container style={'bg-__gray py-20 px-2 min-[400px]:px-10'}>
                <BestDeal/>
            </Container>
            <Container style={'py-20 md:px-10 max-[768px]:px-10 max-[400px]:px-2'}>
                <Properties/>
            </Container>
            <Container style={'py-20 md:px-10 max-[768px]:px-10 max-[400px]:px-2'}>
                <Contact/>
            </Container>
        </>
    )
}

export default Home