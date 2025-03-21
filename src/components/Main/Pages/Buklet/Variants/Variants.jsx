import './Variants.scss';
import Container from '../../../Container/Container';
import Lightone from '../../../../../assets/buklet/Light_1.png';
import Lighttwo from '../../../../../assets/buklet/Light_2.png';
import Lightthree from '../../../../../assets/buklet/Light_3.png';
import Group from '../../../../../assets/buklet/Group.png';
import Button from '../../../Button/Button'
import Darkone from '../../../../../assets/buklet/Dark_1.png';
import Darktwo from '../../../../../assets/buklet/Dark_2.png';
import Darkthree from '../../../../../assets/buklet/Dark_3.png';
import DarkGroup from '../../../../../assets/buklet/darkGroup.png';
import WhiteBook from '../../../../../assets/modals/whiteBook.png';
import DarkBook from '../../../../../assets/modals/darkBook.png';
import Line from '../../../../../assets/presentation/bgLine.png';
import { useState } from 'react';
import Modal from '../../../Modals/Modal';

function Variants() {

    const [isModalOpen, setIsModalOpen] = useState(false); // Одно состояние для модалки
    const [activeVariant, setActiveVariant] = useState(null); // Какой кластер активирован ('blue' или 'green')

    const handleSubmit = (phone) => {
        console.log(`Submitted phone from ${activeVariant} cluster:`, phone);
        setIsModalOpen(false);
        setActiveVariant(null);
      };
    
      const openModal = (cluster) => {
        setActiveVariant(cluster);
        setIsModalOpen(true);
      };

      const modalProps = {
          isOpen: isModalOpen,
          onClose: () => {
            setIsModalOpen(false);
            setActiveVariant(null);
          },
          title: 'Получите дизайн-буклет с подробным описанием отделки светлого интерьера',
          text: 'PDF, можно скачать прямо сейчас',
          backgroundImage: Line,
          backgroundColor: activeVariant === 'white' ? '#EAE3D9 ' : '#42352A',
          foregroundImage: activeVariant === 'white' ? WhiteBook : DarkBook,
          showImages: true,
          onSubmit: handleSubmit,
          buttonText: 'Получить планировки',
        };

    return (
        <Container>
            <section>
                <div className='maintitle'>
                    <h1>2 варианта отделки</h1>
                    <hr className='line'/>
                    <div className='white'>
                        <h2>Светлая отделка</h2>
                        <Button
                        text="Рассчитать ипотеку"
                        color="brown"
                        onClick={() => openModal('white')}
                    />
                    </div>
                </div>
                <div class="grid">
                <div class="div1"> </div>
                <div class="div2"> <img src={Lightone} alt="photo" /></div>
                <div class="div3">
                     <img src={Group} alt="photo" />
                     <span>ОСОБЕННОСТИ ИНТЕРЬЕРА</span>
                     <p>Сочетание белых стен и светлой <br /> напольной доски с текстурой дерева <br /> расширяет пространство, формируя <br />гармоничную, наполненную светом <br />атмосферу</p>
                     </div>
                <div class="div4"> <img src={Lighttwo} alt="photo" /></div>
                <div class="div5"> <img src={Lightthree} alt="photo" /></div>
                </div>
                <hr className='line'/>
                <div className='maintitle'>
                    <div className='white'>
                        <h2>Тёмная отделка</h2>
                        <Button
                        text="Скачать дизайн-буклет"
                        color="brown"
                        onClick={() => openModal('dark')}
                    />
                    </div>
                </div>
                <div class="grid">
                <div class="div1"> </div>
                <div class="div2"> <img src={Darkone} alt="photo" /></div>
                <div class="div3 dark">
                     <img src={DarkGroup} alt="photo" />
                     <span>ОСОБЕННОСТИ ИНТЕРЬЕРА</span>
                     <p>Отделка в тёмном варианте <br /> формируется за счет нейтральных <br /> оттенков стен, а также напольной <br />доски, выполненной в цвете <br />темного дерева
                     </p>
                     </div>
                <div class="div4"> <img src={Darktwo} alt="photo" /></div>
                <div class="div5"> <img src={Darkthree} alt="photo" /></div>
                </div>

                <Modal {...modalProps} />
            </section>
        </Container>
    )
}

export default Variants;