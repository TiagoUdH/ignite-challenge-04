import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { FormHandles } from "@unform/core";

import Input from '../Input';
import Modal from '../Modal';
import { Form } from './styles';

interface IFood {
  name: string;
  description: string;
  image: string;
  price: number;
}

interface ModalAddFoodProps {
  isOpen: boolean,
  setIsOpen: () => void,
  handleAddFood: (food: IFood) => void
}

export default function ModalAddFood({ isOpen, handleAddFood, setIsOpen }: ModalAddFoodProps) {
  const formRef = useRef<FormHandles>(null)

  async function handleSubmit(data: IFood) {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} placeholder="Add Food">
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}