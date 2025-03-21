import './Bank.scss';
import bankLogos from '../../../../../assets/Inteco/bankLogos.png';
import Container from '../../../Container/Container';

function Bank () {
    return (
        <Container>
            <section className='bank'>
                <h1>Самые выгодные условия<br /> кредитования от 20 банков</h1>
                <img src={bankLogos} alt="logos" />
            </section>
        </Container>
    )
}

export default Bank;