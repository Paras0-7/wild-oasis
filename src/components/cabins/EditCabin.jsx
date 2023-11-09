/* eslint-disable react/prop-types */
import { HiPencil } from "react-icons/hi2";
import { Button } from "../../ui/Button/Button";
import { Modal } from "../../ui/Modal";
import { CreateCabinForm } from "./CreateCabinForm";

export const EditCabin = function ({ cabin }) {
  return (
    <Modal>
      <Modal.Open opens="edit-cabin">
        <Button>
          <HiPencil />
        </Button>
      </Modal.Open>
      <Modal.Window name="edit-cabin">
        <CreateCabinForm cabinToEdit={cabin} />
      </Modal.Window>
    </Modal>
  );
};
