import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;

// function AddCabin() {
//   const [isOpneModal, setIsOpneModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpneModal((show) => !show)}>
//         Add new Cabin
//       </Button>
//       {isOpneModal && (
//         <Modal onClose={() => setIsOpneModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpneModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }
