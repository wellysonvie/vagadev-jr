import { createContext, useContext, useState } from "react";

export const BagContext = createContext({});

export function BagProvider({ children }) {

  const [bagProducts, setBagProducts] = useState([]);

  function addProduct(product) {
    setBagProducts([...bagProducts, product]);
  }

  function removeProduct(productId) {
    setBagProducts(bagProducts.filter(product => product.id !== productId));
  }

  function containsProduct(productId) {
    return bagProducts.some(product => product.id === productId);
  }

  return (
    <BagContext.Provider
      value={{
        bagProducts,
        addProduct,
        removeProduct,
        containsProduct
      }}
    >
      {children}
    </BagContext.Provider>
  );
}

export const useBag = () => {
  return useContext(BagContext);
}