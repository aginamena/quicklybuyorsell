import {
  auth,
  doc,
  firestore,
  getDownloadURL,
  ref,
  setDoc,
  storage,
  uploadBytes,
} from "config/firebase";
import { storeDataInFirestore } from "pages/util";

export async function createProduct(specification) {
  const email = auth.currentUser.email;
  const productId = getUniqueId();
  const listOfFilePaths = await uploadFiles(
    specification.files,
    productId,
    email
  );
  specification = {
    ...specification,
    files: listOfFilePaths,
    productId,
    createdProductTimestamp: new Date().getTime(),
    productStatus: "Not published",
    creatorOfProduct: email,
  };
  const myAccountCollection = `myAccount/${email}/products/${productId}`;
  const productsCollection = `products/${productId}`;
  Promise.all([
    storeDataInFirestore(myAccountCollection, { productId }),
    storeDataInFirestore(productsCollection, specification),
  ]);
}

async function uploadFiles(files, productId, email) {
  return await Promise.all(
    files.map(async (file) => {
      const fileId = getUniqueId();
      const pathToFile = `${email}/${productId}/${fileId}`;
      await uploadFile(file, pathToFile);
      const url = await getFileUploadedFileUrl(pathToFile, "products");
      return url;
    })
  );
}

export async function uploadFile(file, pathToFile) {
  const storageRef = ref(storage, `/products/${pathToFile}`);
  await uploadBytes(storageRef, file);
}

export async function getFileUploadedFileUrl(path) {
  return await getDownloadURL(ref(storage, `products/${path}`));
}

function getUniqueId() {
  return (
    Date.now().toString(36) +
    Math.floor(
      Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
    ).toString(36)
  );
}
