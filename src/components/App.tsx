import { Item } from '../types/index';
import Card from './card/Card';
import './App.sass';

const App = () => {
  const initState: Item[] = [
    {
      id: '1',
      title: 'с фуа-гра',
      description: ['10 порций', 'мышь в подарок'],
      weight: 0.5,
      isAvailable: false,
    },
    {
      id: '2',
      title: 'с рыбой',
      description: ['40 порций', '2 мыши в подарок'],
      weight: 2,
      isAvailable: true,
    },
    {
      id: '3',
      title: 'с  курой',
      description: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
      weight: 5,
      isAvailable: false,
    },
  ];

  return (
    <>
      <div className="store-title">
        <p>Ты сегодня покормил кота?</p>
      </div>
      <div className="items-box">
        {initState.length > 0 &&
          initState.map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default App;
