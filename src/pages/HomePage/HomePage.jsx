import Main from '../../components/Main/Main';
import { SalesPosts } from '../../components/SalesPosts/SalesPosts';
import { AboutUs, AboutUsDescription } from './HomePageStyled';

const HomePage = () => {
  return (
    <Main>
      <SalesPosts />
      <AboutUs>
        <h2>Про нас</h2>
        <AboutUsDescription>
          <span>
            Вас вітає інтернет магазин мобільних аксесуарів та побутової техніки
            Smart Store!
          </span>
          <span>
            {`У нас Ви знайдете чохли, зарядні пристрої, навушники, гарнітури,
            кільцеві лампи, павербанки, захисне скло, ремінці для фітнес
            браслетів,тримери,фени для волосся,дитячі іграшки від найкращих
            виробників. Замовляйте товари в зручний для себе час: ввечері або на
            вихідних, з телефона, планшета або комп'ютера. Доставка товару
            здійснюється за допомогою служби доставки "Нова Пошта" або будь-яким
            іншим зручним для Вас способом.`}
          </span>
          <span>
            Якщо виникли питання звертайтесь за телефоном, вказаним на нашому
            сайті smartstore.com.ua, або оформіть замовлення і ми Вам
            зателефонуємо найближчим часом.
          </span>
        </AboutUsDescription>
      </AboutUs>
    </Main>
  );
};

export default HomePage;
