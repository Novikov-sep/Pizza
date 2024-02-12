import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PizzaBlock, { PizzaBlockProps } from '../components/PizzaBlock';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<PizzaBlockProps>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://649ad6c9bf7c145d0239910f.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (error) {
        alert('произошла ошибка при загрузке пиццы');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <h1>Загрузка...</h1>;
  }
  return (
   <div className='full-pizza__item'>
   <PizzaBlock
      key={pizza.id}
      id={pizza.id}
      imageUrl={pizza.imageUrl}
      price={pizza.price}
      sizes={pizza.sizes}
      title={pizza.title}
      types={pizza.types}/>
      </div>
  );
};

export default FullPizza;
