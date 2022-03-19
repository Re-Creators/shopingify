interface Props {
  onClose: () => void;
  onSubmit: () => void;
}

function CancelModal({ onClose, onSubmit }: Props) {
  return (
    <div className="modal w-96 bg-white rounded-lg p-8">
      <button className="absolute right-3 top-3" onClick={onClose}>
        X
      </button>
      <p className="font-semibold">
        Are you sure that you want to cancel this list?
      </p>
      <div className="flex justify-end text-sm mt-3">
        <button className="mr-3" onClick={onClose}>
          cancel
        </button>
        <button
          className="bg-red-500 px-5 py-2 rounded-md text-white"
          onClick={onSubmit}
        >
          Yes
        </button>
      </div>
    </div>
  );
}

export default CancelModal;
