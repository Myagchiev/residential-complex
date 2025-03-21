import './Inteco.scss';
import Container from '../../../Container/Container';
import IntecoImg from '../../../../../assets/Inteco/Inteco.png'

function IntecoDiv () {
    return (
            <Container>
                <section className='IntecoDiv'>
                <div className='left'>
                    <h1>Девелопер ИНТЕКО</h1>
                    <p>Реализует лучшие проекты в сфере недвижимости на основе анализа<br /> и прогноза предпочтений человека</p>
                    <h6>20 лет</h6>
                    <p>на рынке недвижимости <br />Москвы и регионов</p>
                    <h6>80+ проектов</h6>
                    <p>жилых домов сдано в Москве</p>
                    <h6>5 000 000 м²</h6>
                    <p>общая площадь готовых<br /> объектов</p>
                    <h6>500 сотрудников</h6>
                    <p>в штате компании</p>
                </div>
                <div className='right'>
                <ul>
                    <li><span>Документы West Garden</span></li>
                    <li><span>Проектная документация</span></li>
                    <li><span>Разрешение на строительство</span></li>
                    <li><span>Проектная декларация (1 очередь)</span></li>
                    <li><span>Проектная декларация (2 очередь)</span></li>
                </ul>
                </div>
                </section>
            </Container>
    )
}


export default IntecoDiv;