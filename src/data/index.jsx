import plan_4_1 from '../assets/image/plan/plan-4-1.png'
import infraSlider_1 from '../assets/image/infra/slider_1.png'
import infraSlider_2 from '../assets/image/infra/slider_2.png'
import infraSlider_3 from '../assets/image/infra/slider_3.jpeg'
import infraSlider_4 from '../assets/image/infra/slider_4.jpeg'
import infraSlider_5 from '../assets/image/infra/slider_5.jpeg'
import infraSlider_6 from '../assets/image/infra/slider_6.jpeg'
import infraSlider_7 from '../assets/image/infra/slider_7.jpeg'

export const plans = [
    {figure: plan_4_1, rooms: 4, area: '100,7'},
    {figure: plan_4_1, rooms: 4, area: '100,7'},
    {figure: plan_4_1, rooms: 4, area: '100,7'}
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