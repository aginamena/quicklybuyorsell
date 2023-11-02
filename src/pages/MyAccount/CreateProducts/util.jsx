import {
  storage,
  uploadBytes,
  ref,
  doc,
  firestore,
  setDoc,
  getDownloadURL,
} from "config/firebase";

export async function createProduct(specification, email) {
  const productId = getUniqueId();
  const listOfFilePaths = await uploadFiles(
    specification.images,
    productId,
    email
  );
  specification = {
    ...specification,
    files: listOfFilePaths,
    createdProductTimestamp: new Date().getTime(),
    productStatus: "Not published",
    creatorOfProduct: email,
  };
  const pathToDocument = `users/${email}/products/${productId}`;
  await storeProduct(pathToDocument, specification);
}

async function storeProduct(pathToDocument, product) {
  await setDoc(doc(firestore, pathToDocument), product);
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
