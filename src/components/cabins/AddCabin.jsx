import { useState } from "react";
import { Button } from "../../ui/Button/Button";
import { CreateCabinForm } from "./CreateCabinForm";
import { Modal } from "../../ui/Modal";

export const AddCabin = function () {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((val) => !val)}>Add new cabin</Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onClose={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
};
