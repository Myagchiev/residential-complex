import './Parent.scss';
import PhotoCard from '../../../PhotoCard/PhotoCard';
import photo1 from '../../../../../assets/grid/20.png';
import photo2 from '../../../../../assets/grid/15.png';
import photo3 from '../../../../../assets/grid/7.png';
import photo4 from '../../../../../assets/grid/2.png';

function Parent() {
  const photoData = [
    { image: photo1, title: "20 гектаров", description: "территории ЖК — это как полтора Зарядья" },
    { image: photo2, title: "15 корпусов", description: "по 12-14 этажей, просторная застройка" },
    { image: photo3, title: "7 гектаров", description: "приватного парка для жителей ЖК" },
    { image: photo4, title: "2 километра", description: "набережной реки Раменка вдоль ЖК" },
  ];

  return (
    <div className="parent">
      {photoData.map((item, index) => (
        <PhotoCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          variant="default"
        />
      ))}
    </div>
  );
}

export default Parent;