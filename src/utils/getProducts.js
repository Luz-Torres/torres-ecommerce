import { collection, getDocs,doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../config/firebase.js";

export const getProducts = async () => {
    const productsRef = collection(db, "products");
    const snapshot = await getDocs(productsRef);
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return products;
};

export const getProductById = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error("Producto no encontrado");
    }
};


export const getProductsByCategory = async (category) => {
    const productsRef = collection(db, "products");
    const q = category === "todos"
        ? productsRef
        : query(productsRef, where("category", "==", Number(category)));
    const snapshot = await getDocs(q);
    const filtered = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return filtered;
};
