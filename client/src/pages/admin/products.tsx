"use client";

import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("title") || "";

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/product?page=${page}&limit=10&title=${searchQuery}`);
      setProducts(res.data.data);
      setTotalPages(res.data.totalPages);

    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    toast((t) => (
    <div className="flex flex-col gap-3">
      <p className="font-medium">
        Are you sure you want to delete this product?
      </p>

      <div className="flex gap-2 justify-end">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Cancel
        </button>

        <button
          onClick={async () => {
            toast.dismiss(t.id);

            try {
              await axios.delete(
                `http://localhost:5000/api/product/${id}`
              );

              toast.success("Product deleted successfully ✅");

              fetchProducts();
            } catch (error) {
              toast.error("Failed to delete product ❌");
              console.log(error);
            }
          }}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  ));
  };


  useEffect(() => {
    fetchProducts();
  }, [page, searchQuery]);


  return (
    <div className=" mt-20 text-black dark:bg-black/40 md:p-2 dark:text-white min-h-screen">

      <div className="flex justify-between items-center mb-6 p-4">

        <h1 className="text-2xl font-semibold text-warm-gold dark:text-premium-gold">
          All Products
        </h1>

        <Link href="/admin/add-products">
          <button className="bg-warm-gold text-white px-5 py-2 rounded-lg shadow hover:bg-premium-gold">
            + Add Product
          </button>
        </Link>

      </div>

      <div className="bg-white dark:bg-black/10 rounded-xl shadow-sm overflow-hidden">

        <table className="w-full text-sm">

          <thead className="hidden sm:table-header-group text-gray-600 dark:bg-black/10 dark:text-gray-200">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Is Featured</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>


          <tbody>
            {products.map((product: any) => (
              <>
               
                <tr
                  key={product._id}
                  className="hidden md:table-row border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-black"
                >
                  <td className="p-4">
                    <img
                      src={`http://localhost:5000/${product.thumbnail}`}
                      className="w-14 h-14 object-cover rounded-lg"
                    />
                  </td>

                  <td className="p-4 font-medium">
                    {product.title}
                  </td>

                  <td className="p-4">
                    {product.category?.name}
                  </td>

                  <td className="p-4 font-semibold">
                    ₹{product.price}
                  </td>

                  <td className="p-4">
                    {product.stock}
                  </td>

                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium 
                      ${product.isFeatured 
                        ? "bg-green-100 text-green-600" 
                        : "bg-gray-200 text-gray-600"}`}>
                      {product.isFeatured ? "Featured" : "Not Featured"}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center items-center gap-3">
                      <Link href={`/admin/edit-products/${product.slug}`}>
                        <button className="text-green-600 hover:text-green-800">
                          <Pencil size={18} />
                        </button>
                      </Link>

                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(product._id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>

               
                <tr
                  key={product._id + "-mobile"}
                  className="md:hidden "
                >
                  <td colSpan={7} className="p-4">
                    <div className=" dark:bg-neutral-900 rounded-2xl shadow-md  p-4 flex flex-col gap-4">

                     
                      <div className="flex gap-4">
                        <img
                          src={`http://localhost:5000/${product.thumbnail}`}
                          className="w-24 h-24 object-cover rounded-xl shadow-sm"
                        />

                        <div className="flex-1">
                          <h2 className="text-base font-semibold dark:text-white text-gray-800 leading-snug">
                            {product.title}
                          </h2>

                          <span className="inline-block mt-1 px-3 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">
                            {product.category?.name}
                          </span>

                          <p className="mt-2 text-lg dark:text-white font-bold text-gray-900">
                            ₹{product.price}
                          </p>
                        </div>
                      </div>

                      
                      <div className="flex items-center justify-between">

                        <div>
                          <span className="text-xs text-gray-500">Stock</span>
                          <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium w-fit">
                            {product.stock}
                          </div>
                        </div>

                        <div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium 
                            ${product.isFeatured
                              ? "bg-green-500 text-white"
                              : "bg-gray-300 text-gray-700"
                            }`}>
                            {product.isFeatured ? "Featured" : "Not Featured"}
                          </span>
                        </div>

                        <div className="flex gap-3">
                          <Link href={`/admin/edit-products/${product.slug}`}>
                            <button className="p-2 rounded-lg bg-green-100 text-green-600">
                              <Pencil size={16} />
                            </button>
                          </Link>

                          <button
                            className="p-2 rounded-lg bg-red-100 text-red-600"
                            onClick={() => handleDelete(product._id)}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>

                      </div>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>

      </div>

      <div className="flex items-center gap-3 mt-6">


        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 disabled:opacity-50 cursor-pointer"
        >
          {"<<"}
        </button>


        <button className="px-4 py-1 bg-warm-gold text-white">
          {page}
        </button>


        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-1 disabled:opacity-50 cursor-pointer"
        >
          {">>"}
        </button>

      </div>


    </div>
  );
}