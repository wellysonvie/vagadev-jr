import styles from '../styles/components/AddedProductModal.module.scss';

const AddedProductModal = ({ closeModal }) => {
  return (
    <div className={styles.addedProductModal}>
      <div className={styles.messageBox}>
        <img
          className={styles.closeBtn}
          src="/assets/svg/close_btn.svg"
          alt="Fechar"
          onClick={closeModal}
        />
        <span></span>
        <p>Pedido realizado com sucesso!</p>
        <img src="/assets/svg/mario.svg" />
      </div>
    </div>
  );
}

export default AddedProductModal;