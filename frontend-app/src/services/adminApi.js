export const API_URL = "http://localhost:9090";

// src/api/adminApi.js

export async function addProduct(productData) {
  const response = await fetch("http://localhost:9090/admin/products/add", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData), // 👈 MUST send full product object
  });

  if (!response.ok) {
    const errorMsg = await response.text();
    throw new Error(errorMsg);
  }

  return await response.json();
}


export async function deleteProduct(id) {
  return await fetch(`${API_URL}/admin/product/delete`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ productId: id }),
  }).then((res) => res.json());
}

export async function getUser(id) {
  return await fetch(`${API_URL}/admin/user/getbyid`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ userId: id }),
  }).then((res) => res.json());
}

export async function modifyUser(data) {
  return await fetch(`${API_URL}/admin/user/modify`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
