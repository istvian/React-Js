import {
  getDocs,
  query,
  where,
  getDoc,
  doc,
  collection,
  addDoc,
  documentId,
} from "firebase/firestore";
import { db } from ".";
import { createAdaptedProductFromFirebase } from "../../adapters/productAdapter";

const getProducts = (categoryId) => {
  const collectionRef = !categoryId
    ? collection(db, "products")
    : query(collection(db, "products"), where("category", "==", categoryId));

  return getDocs(collectionRef)
    .then((response) => {
      const products = response.docs.map((doc) => {
        return createAdaptedProductFromFirebase(doc);
      });
      return products;
    })
    .catch((error) => {
      return error;
    });
};

const getDocbyID = (productId) => {
  return getDoc(doc(db, "products", productId))
    .then((response) => {
      const values = response.data();
      const product = {
        id: response.id,
        ...values,
      };
      return product;
    })
    .catch((error) => {
      return error;
    });
};
const getCategory = () => {
  const collectionRef = collection(db, "categories");
  return getDocs(collectionRef)
    .then((response) => {
      const categories = [];
      response.docs.forEach((category) => {
        categories.push(category.data().description);
      });
      return categories;
    })
    .catch((error) => {
      return error;
    });
};
const findOrderById = (orderId) => {
  const orderRef = doc(db, "orders", orderId);
  return getDoc(orderRef)
    .then((response) => {
      if (response.data()) {
        return response.data();
      }
    })
    .catch((error) => {
      return error;
    });
};
const checkCart = async (productRef, ids) => {
  return await getDocs(query(productRef, where(documentId(), "in", ids)));
};
const addOrder = async (orderRef, order) => {
  return await addDoc(orderRef, order);
};

export {
  getProducts,
  getDocbyID,
  getCategory,
  findOrderById,
  checkCart,
  addOrder,
};
