/* eslint-disable react/prop-types */
import { HiTrash } from "react-icons/hi2";
import { Button } from "../../ui/Button/Button";
import { Modal } from "../../ui/Modal";
import { ConfirmDelete } from "../../ui/ConfirmDelete";

export const DeleteCabin = function ({ isDeleting, deleteCabin }) {
  return (
    <Modal>
      <Modal.Open opens="delete-cabin">
        <Button>
          <HiTrash />
        </Button>
      </Modal.Open>
      <Modal.Window name="delete-cabin">
        <ConfirmDelete resourceName="Cabin" disabled={isDeleting} onConfirm={deleteCabin} />
      </Modal.Window>
    </Modal>
  );
};
