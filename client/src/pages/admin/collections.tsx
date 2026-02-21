// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import AdminLayout from "./AdminLayout";

// interface Collection {
//   id: number;
//   name: string;
//   slug: string;
//   category: string;
//   featured: boolean;
//   heroImage: string;
// }

// const AdminCollections = () => {
//   const [collections, setCollections] = useState<Collection[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [showProductForm, setShowProductForm] = useState(false);
//   const [editingId, setEditingId] = useState<number | null>(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     slug: "",
//     category: "",
//     description: "",
//     heroImage: "",
//     featured: false,
//   });

//   const [productForm, setProductForm] = useState({
//     name: "",
//     slug: "",
//     description: "",
//     price: 0,
//     images: [""],
//     collectionId: 0,
//   });

//   const fetchCollections = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get("/api/collections");

//       const collectionsArray = res.data?.collections || res.data?.data || [];

//       setCollections(collectionsArray);
//     } catch (err) {
//       console.error("Error fetching collections:", err);
//       setCollections([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCollections();
//   }, []);

//   const handleDelete = async (id: number) => {
//     try {
//       await axios.delete(`/api/collections/${id}`);
//       fetchCollections();
//     } catch (err) {
//       console.error("Error deleting collection:", err);
//     }
//   };

//   const handleCollectionSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       if (editingId !== null) {
//         await axios.put(`/api/collections/${editingId}`, formData);
//       } else {
//         await axios.post("/api/collections", formData);
//       }
//       setShowForm(false);
//       setEditingId(null);
//       fetchCollections();
//       setFormData({
//         name: "",
//         slug: "",
//         category: "",
//         description: "",
//         heroImage: "",
//         featured: false,
//       });
//     } catch (err) {
//       console.error("Error saving collection:", err);
//     }
//   };

//   const handleProductSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post("/api/products", productForm);
//       setShowProductForm(false);
//       setProductForm({
//         name: "",
//         slug: "",
//         description: "",
//         price: 0,
//         images: [""],
//         collectionId: 0,
//       });
//     } catch (err) {
//       console.error("Error adding product:", err);
//     }
//   };

//   return (
//     <AdminLayout>
//       <div className="p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-semibold">Collections</h1>
//           <button
//             onClick={() => {
//               setShowForm(true);
//               setEditingId(null);
//               setFormData({
//                 name: "",
//                 slug: "",
//                 category: "",
//                 description: "",
//                 heroImage: "",
//                 featured: false,
//               });
//             }}
//             className="bg-primary text-white px-4 py-2 rounded-md"
//           >
//             + Add Collection
//           </button>
//         </div>

//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {collections.map((collection) => (
//               <div
//                 key={collection.id}
//                 className="border rounded-xl p-4 bg-white shadow hover:shadow-md transition-all"
//               >
//                 <img
//                   src={collection.heroImage}
//                   alt={collection.name}
//                   loading="lazy"
//                   decoding="async"
//                   className="w-full h-48 object-cover rounded-lg mb-3"
//                 />
//                 <h2 className="text-lg font-bold">{collection.name}</h2>
//                 <p className="text-sm text-muted-foreground">
//                   Category: {collection.category}
//                 </p>
//                 {collection.featured && (
//                   <span className="text-xs text-green-600 font-medium">
//                     Featured
//                   </span>
//                 )}
//                 <div className="flex justify-between items-center mt-2 gap-2">
//                   <button
//                     onClick={() => {
//                       setShowProductForm(true);
//                       setProductForm({
//                         ...productForm,
//                         collectionId: collection.id,
//                       });
//                     }}
//                     className="text-blue-600 text-sm"
//                   >
//                     + Add Product
//                   </button>
//                   <button
//                     onClick={() => {
//                       setShowForm(true);
//                       setEditingId(collection.id);
//                       setFormData({
//                         name: collection.name,
//                         slug: collection.slug,
//                         category: collection.category,
//                         description: "",
//                         heroImage: collection.heroImage,
//                         featured: collection.featured,
//                       });
//                     }}
//                     className="text-yellow-600 text-sm"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(collection.id)}
//                     className="text-red-600 text-sm"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Collection Form Modal */}
//         {showForm && (
//           <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4">
//               <h2 className="text-xl font-semibold">
//                 {editingId ? "Edit Collection" : "New Collection"}
//               </h2>
//               <form onSubmit={handleCollectionSubmit} className="space-y-3">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full border px-3 py-2 rounded"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Slug"
//                   className="w-full border px-3 py-2 rounded"
//                   value={formData.slug}
//                   onChange={(e) =>
//                     setFormData({ ...formData, slug: e.target.value })
//                   }
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Category"
//                   className="w-full border px-3 py-2 rounded"
//                   value={formData.category}
//                   onChange={(e) =>
//                     setFormData({ ...formData, category: e.target.value })
//                   }
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Hero Image URL"
//                   className="w-full border px-3 py-2 rounded"
//                   value={formData.heroImage}
//                   onChange={(e) =>
//                     setFormData({ ...formData, heroImage: e.target.value })
//                   }
//                   required
//                 />
//                 <textarea
//                   placeholder="Description"
//                   className="w-full border px-3 py-2 rounded"
//                   value={formData.description}
//                   onChange={(e) =>
//                     setFormData({ ...formData, description: e.target.value })
//                   }
//                 />
//                 <label className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     checked={formData.featured}
//                     onChange={(e) =>
//                       setFormData({ ...formData, featured: e.target.checked })
//                     }
//                   />
//                   <span>Featured</span>
//                 </label>
//                 <div className="flex justify-end gap-2">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setShowForm(false);
//                       setEditingId(null);
//                     }}
//                     className="px-4 py-2 border rounded text-black"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-blue-600 text-white px-4 py-2 rounded"
//                   >
//                     {editingId ? "Update" : "Create"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

//         {/* Product Modal (Unchanged) */}
//         {showProductForm && (
//           <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4">
//               <h2 className="text-xl font-semibold">New Product</h2>
//               <form onSubmit={handleProductSubmit} className="space-y-3">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full border px-3 py-2 rounded"
//                   value={productForm.name}
//                   onChange={(e) =>
//                     setProductForm({ ...productForm, name: e.target.value })
//                   }
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Slug"
//                   className="w-full border px-3 py-2 rounded"
//                   value={productForm.slug}
//                   onChange={(e) =>
//                     setProductForm({ ...productForm, slug: e.target.value })
//                   }
//                   required
//                 />
//                 <input
//                   type="number"
//                   placeholder="Price"
//                   className="w-full border px-3 py-2 rounded"
//                   value={productForm.price}
//                   onChange={(e) =>
//                     setProductForm({
//                       ...productForm,
//                       price: parseFloat(e.target.value),
//                     })
//                   }
//                   required
//                 />
//                 <textarea
//                   placeholder="Description"
//                   className="w-full border px-3 py-2 rounded"
//                   value={productForm.description}
//                   onChange={(e) =>
//                     setProductForm({
//                       ...productForm,
//                       description: e.target.value,
//                     })
//                   }
//                 />
//                 <input
//                   type="text"
//                   placeholder="Image URL"
//                   className="w-full border px-3 py-2 rounded"
//                   value={productForm.images[0]}
//                   onChange={(e) =>
//                     setProductForm({ ...productForm, images: [e.target.value] })
//                   }
//                 />
//                 <div className="flex justify-end gap-2">
//                   <button
//                     type="button"
//                     onClick={() => setShowProductForm(false)}
//                     className="px-4 py-2 border rounded"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-blue-600 text-white px-4 py-2 rounded"
//                   >
//                     Create
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </AdminLayout>
//   );
// };

// export default AdminCollections;






"use client";

import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

interface Collection {
  _id: string;
  name: string;
  description: string;
  slug: string;
  image: string;
}

export default function AdminCollections() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // ✅ FETCH COLLECTIONS
  const fetchCollections = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://127.0.0.1:5000/api/collection?page=${page}&limit=10`
      );

      setCollections(res.data.data || []);
      setTotalPages(res.data.totalPages || 1);
    } catch (error) {
      console.error("Collection fetch error:", error);
      setCollections([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ DELETE
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this collection?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://127.0.0.1:5000/api/collection/${id}`);

      // 🔥 instant UI update
      setCollections((prev) => prev.filter((c) => c._id !== id));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, [page]);

  return (
    <div className="mt-20 bg-white dark:bg-neutral-950 min-h-screen transition-colors">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 px-5">
        <h1 className="text-2xl font-semibold text-warm-gold dark:text-yellow-400">
          All Collections
        </h1>

        <Link href="/admin/add-collection">
          <button className="bg-warm-gold text-white px-5 py-2 rounded-lg shadow hover:bg-premium-gold transition">
            + Add Collection
          </button>
        </Link>
      </div>

      {/* TABLE */}
      <div className="px-5">
        <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-neutral-700">
          <table className="w-full text-sm">
            
            {/* HEAD */}
            <thead className="bg-gray-50 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
              <tr>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Description</th>
                <th className="p-4 text-left">Slug</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center p-6 text-gray-500 dark:text-gray-400"
                  >
                    Loading...
                  </td>
                </tr>
              ) : collections.length > 0 ? (
                collections.map((collection) => (
                  <tr
                    key={collection._id}
                    className="border-t border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
                  >
                    {/* IMAGE */}
                    <td className="p-4">
                      <img
                        src={`http://127.0.0.1:5000/${collection.image}`}
                        alt={collection.name}
                        className="w-14 h-14 object-cover rounded"
                        onError={(e: any) => {
                          e.target.src =
                            "https://via.placeholder.com/60x60?text=No+Image";
                        }}
                      />
                    </td>

                    {/* NAME */}
                    <td className="p-4 font-medium text-gray-900 dark:text-white">
                      {collection.name}
                    </td>

                    {/* DESCRIPTION */}
                    <td className="p-4 max-w-xs truncate text-gray-600 dark:text-gray-300">
                      {collection.description}
                    </td>

                    {/* SLUG */}
                    <td className="p-4 text-gray-600 dark:text-gray-300">
                      {collection.slug}
                    </td>

                    {/* ACTIONS */}
                    <td className="p-4 flex gap-3">
                      <Link href={`/admin/edit-collection/${collection.slug}`}>
                        <button className="text-green-600 hover:text-green-800 dark:text-green-500 dark:hover:text-green-400 transition">
                          <Pencil size={18} />
                        </button>
                      </Link>

                      <button
                        className="text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400 transition"
                        onClick={() => handleDelete(collection._id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center p-6 text-gray-500 dark:text-gray-400"
                  >
                    No collections found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* PAGINATION */}
      <div className="flex items-center gap-3 mt-6 px-5 pb-10">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 disabled:opacity-50 bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded"
        >
          {"<<"}
        </button>

        <button className="px-4 py-1 bg-warm-gold text-white rounded">
          {page}
        </button>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-1 disabled:opacity-50 bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded"
        >
          {">>"}
        </button>
      </div>
    </div>
  );
}