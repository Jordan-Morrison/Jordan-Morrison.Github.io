import Markdown from 'react-markdown';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import isTouchDevice from 'is-touch-device';
import styles from '@/styles/PortfolioItem.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Slide from '../atoms/slide';
import StackList from '../atoms/StackList';

export default function PortfolioItem(props) {

    return (
        <div className={styles.container}>
            {props.project.data.images &&
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={{
                        enabled: true
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={!isTouchDevice()}
                    modules={[Keyboard, Pagination, Navigation]}
                    className={styles.swiper}
                >
                    {props.project.data.images.map(image =>
                        <SwiperSlide className={styles.slider} key={image.url}>
                            <Slide image={image}/>
                        </SwiperSlide>
                    )}
                </Swiper>
            }
            <h4>{props.project.data.title}</h4>
            <Markdown>{props.project.description}</Markdown>
            <StackList techStack={props.project.data.techStack}/>
        </div>
    )
}