import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


const ModalForm = (props) => {
  const {
    buttonLabel,
    className,
    about
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <Button color="primary" size="lg" onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{about}</ModalHeader>
        <ModalBody>
          <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="example@gmail.com" />
                </FormGroup>
                <FormGroup>
                    <Label for="number">Номер телефона</Label>
                    <Input type="email" name="number" id="number" placeholder="+7888654321" />
                </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={toggle}>Отправить</Button>{' '}
            <Button color="secondary" onClick={toggle}>Отмена</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalForm;