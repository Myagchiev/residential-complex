import './Finish.scss';
import PhotoCard from '../../../PhotoCard/PhotoCard';
import Container from '../../../Container/Container';
import cardone from '../../../../../assets/buklet/first.png';
import cardtwo from '../../../../../assets/buklet/second.png';
import cardthree from '../../../../../assets/buklet/third.png';

function Finish() {
    return (
        <Container>
            <section className='finish'>
                <div className='maintitle'>
                <h1>Отделка от застройщика</h1>
                <p>Экономьте на стоимости ремонта, покупая квартиру с готовой отделкой</p>
                <hr />
                </div>
                <div className='cards'>
                <PhotoCard
                image={cardone}
                title={<>Готовый <br /> дизайн-проект</>}
                description={<>Воспользуйтесь возможностью<br /> сразу же заняться меблировкой и<br /> благоустройством новой квартиры,<br /> как только получите ключи</>}
                variant="stacked"
                />
                <PhotoCard
                image={cardtwo}
                title={<>Чистота и тишина,<br /> без шума и пыли</>}
                description={<>Забудьте шум от «бесконечного<br /> ремонта» соседей и лифт,<br /> декорированный защитными<br /> материалами</>}
                variant="stacked"
                />
                <PhotoCard
                image={cardthree}
                title={<>Выгода за счет<br /> оптовых закупок</>}
                description={<>Благодаря оптовым закупкам<br /> застройщика, вы получаете<br /> возможность сэкономить<br /> на стоимости ремонта</>}
                variant="stacked"
                />
                </div>
            </section>
        </Container>
    )
}


export default Finish;
