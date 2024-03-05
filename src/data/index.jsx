import plan_4_1 from '../assets/image/plan/plan-4-1.webp'
import about_1 from '../assets/image/about/slider_relax.jpg'
import about_2 from '../assets/image/about/slider1_2.jpg'
import about_3 from '../assets/image/about/slider1_1.jpg'
import about_4 from '../assets/image/about/slider2_2.jpg'
import about_5 from '../assets/image/about/slider3_1.jpg'
import about_6 from '../assets/image/about/slider3_2.jpg'
import infraSlider_1 from '../assets/image/infra/slider_1.webp'
import infraSlider_2 from '../assets/image/infra/slider_2.webp'
import infraSlider_3 from '../assets/image/infra/slider_3.webp'
import infraSlider_4 from '../assets/image/infra/slider_4.webp'
import infraSlider_5 from '../assets/image/infra/slider_5.webp'
import infraSlider_6 from '../assets/image/infra/slider_6.webp'
import infraSlider_7 from '../assets/image/infra/slider_7.webp'
import Exterior1 from '../assets/image/gallery/exterior_1.webp'
import Exterior2 from '../assets/image/gallery/exterior_2.webp'
import Exterior4 from '../assets/image/gallery/exterior_4.webp'
import Exterior5 from '../assets/image/gallery/exterior_5.webp'
import Exterior6 from '../assets/image/gallery/exterior_6.webp'
import Exterior3 from '../assets/image/gallery/exterior_3.webp'
import Interior1 from '../assets/image/gallery/interior_1.jpeg'
import Interior2 from '../assets/image/gallery/interior_2.jpeg'
import Interior3 from '../assets/image/gallery/interior_3.jpeg'
import Interior4 from '../assets/image/gallery/interior_4.jpeg'
import Interior5 from '../assets/image/gallery/interior_5.jpeg'
import Interior6 from '../assets/image/gallery/interior_6.jpeg'

export const plans = [
    {figure: plan_4_1, rooms: 4, area: '100,7',type:''},
    {figure: plan_4_1, rooms: 4, area: '105.4',type:''},
    {figure: plan_4_1, rooms: 4, area: '99.5',type:''},
    {figure: plan_4_1, rooms: 3, area: '95.65', type:''},
    {figure: plan_4_1, rooms: 3, area: '76.7', type:'veranda'},
    {figure: plan_4_1, rooms: 2, area: '26.7', type:'veranda'}
]

export const infra_sliders = [
    {
        figure: infraSlider_1,
        title: 'Reception',
        desc: 'Вам не нужно отправляться в поездку для того, чтобы насладиться истинным гостеприимством и по-настоящему отдохнуть. Забронируйте одну из комнат на любое удобное время в ресепшн и наслаждайтесь высококлассным комфортом и заботой.',
        numOptions: {num: '01', numPosition: 'top-left-out', numSize: 'large'}
    },
    {
        figure: infraSlider_2,
        title: 'fitness room',
        desc: 'Проснувшись с утра вам потребуется сделать всего пару шагов до лифта, спуститься вниз, чтобы оказаться в оборудованном фитнес-зале. Это отличная возможность начать день с тренировки, экономя важные минуты на дорогу.',
        numOptions: {num: '02', numPosition: 'bottom-right', numSize: 'normal'}
    },
    {
        figure: infraSlider_3,
        title: 'spa Room',
        desc: 'Посвятите время себе в атмосферном SPA в вашем доме, это возможность отправиться на “солнечные берега” не выходя из дома. Вам не потребуется выезжать в поисках спа, забронируйте время и посетите любую процедуру.',
        numOptions: {num: '03', numPosition: 'top-left-in', numSize: 'small'}
    },
    {
        figure: infraSlider_4,
        title: 'music room',
        desc: 'Специально оборудованную Music Room оценят по достоинству увлеченные музыкой жители Grande Vie. Здесь никто не потревожит вас. Наслаждайтесь творчеством, пойте, отдавая дань любимому хобби.',
        numOptions: {num: '04', numPosition: 'bottom-right', numSize: 'normal'}
    },
    {
        figure: infraSlider_5,
        title: 'Cinema/PS room',
        desc: 'Только представьте, если бы все развлечения города были в одном доме. Резиденты Grande Vie пользуются этим преимуществом, организовывая вечерние просмотры любимых фильмов или устраивая турниры на игровой приставке в кругу своих друзей.',
        numOptions: {num: '05', numPosition: 'bottom-right', numSize: 'normal'}
    },
    {
        figure: infraSlider_6,
        title: 'kids room',
        desc: 'Любое желание родителей исполняется мгновенно в Grande Vie. В просторном, уютном и красочном Kids Room за вашими детьми присмотрит профессиональная няня, если вам срочно нужно отлучиться на встречу или попасть на званый ужин.',
        numOptions: {num: '06', numPosition: 'bottom-right', numSize: 'normal'}
    },
    {
        figure: infraSlider_7,
        title: 'karaoke',
        desc: 'Караоке - одно из любимых развлечений многих, но не всем хочется специально выезжать в город и собираться большой компанией. Проводите время весело и с яркими эмоциями, как в лучших заведениях города на территории своего дома.',
        numOptions: {num: '07', numPosition: 'top-left-in', numSize: 'small'}
    },

]


export const GallerySliders = {
    'exterior': [Exterior1, Exterior2, Exterior3, Exterior4, Exterior5, Exterior6],
    'interior': [Interior1, Interior2, Interior3, Interior4, Interior5, Interior6],
    'hall': [Exterior4, Exterior3, Interior5, Interior6, Exterior2]
}


export const AboutCards = [
    {img: about_1, name: 'Relax зоны'},
    {img: about_2, name: 'Чистый воздух и горы рядом'},
    {img: about_3, name: 'Ритм города в гармонии с природой'},
    {img: about_4, name: 'Workout и игровые комплексы'},
    {img: about_6, name: 'Chill зоны'}
]
export const AboutSliders = {
    first: {
        name: 'Relax зоны',
        sliders: [
            about_1, about_5, about_6
        ]
    },
    second: {
        name: 'Чистый воздух и горы рядом',
        sliders: [
            about_2, about_3, about_4
        ]
    },
    third: {
        name: 'Ритм города в гармонии с природой',
        sliders: [
            about_4, infraSlider_3, infraSlider_7
        ]
    }
}