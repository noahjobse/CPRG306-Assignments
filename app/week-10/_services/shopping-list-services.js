import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Get all items for a user
export async function getItems(userId) {
  const itemsRef = collection(db, "users", userId, "items");
  const q = query(itemsRef);
  const querySnapshot = await getDocs(q);

  const items = [];
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

// Add a new item to the user's list
export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}
