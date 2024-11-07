import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useCreateOrderMutation } from "../../redux/orders/ordersApi";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const CheckOut = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);

  const { currentUser } = useAuth();
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createOrder, { isLoading, error }] = useCreateOrderMutation();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = async (data) => {
    const newOrder = {
      name: data.name,
      email: currentUser?.email,
      address: {
        city: data.city,
        country: data.country,
        state: data.state,
        zipcode: data.zipcode,
      },
      phone: data.phone,
      productsId: cartItems.map((item) => item._id),
      totalPrice: totalPrice,
    };

    try {
      await createOrder(newOrder);
      Swal.fire({
        title: "Confirmed Order",
        text: "Your Order Placed Successfully!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, It's Okay",
      });
      navigate("/orders");
    } catch (error) {
      console.error("Error placing the order", error);
      Swal.fire({
        title: "Order Error",
        text: error?.data?.message || "Failed to place an order",
        icon: "error",
      });
    }

    setMessage("Order placed successfully!");
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div>
              <h2 className="font-semibold text-xl text-gray-600 mb-2">
                Cash On Delivery
              </h2>
              <p className="text-gray-500 mb-2">Total Price: ${totalPrice}</p>
              <p className="text-gray-500 mb-6">Items: {cartItems.length}</p>
            </div>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8"
              >
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    {/* Name */}
                    <div className="md:col-span-5">
                      <label htmlFor="full_name">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        disabled
                        defaultValue={currentUser?.email}
                        placeholder="email@domain.com"
                      />
                    </div>

                    {/* Phone */}
                    <div className="md:col-span-5">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="+123 456 7890"
                        {...register("phone", {
                          required: "Phone is required",
                        })}
                      />
                      {errors.phone && (
                        <p className="text-red-500">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Address */}
                    <div className="md:col-span-3">
                      <label htmlFor="address">Address / Street</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        {...register("address", {
                          required: "Address is required",
                        })}
                      />
                    </div>

                    {/* City */}
                    <div className="md:col-span-2">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        {...register("city", { required: "City is required" })}
                      />
                    </div>

                    {/* Country */}
                    <div className="md:col-span-2">
                      <label htmlFor="country">Country / region</label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        {...register("country", {
                          required: "Country is required",
                        })}
                      />
                    </div>

                    {/* State */}
                    <div className="md:col-span-2">
                      <label htmlFor="state">State / province</label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        {...register("state", {
                          required: "State is required",
                        })}
                      />
                    </div>

                    {/* Zipcode */}
                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        {...register("zipcode", {
                          required: "Zipcode is required",
                        })}
                      />
                    </div>

                    {/* Terms and Conditions */}
                    <div className="md:col-span-5 mt-3">
                      <div className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="terms"
                          id="terms"
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                        />
                        <label
                          htmlFor="terms"
                          className="ml-2 text-sm text-gray-600"
                        >
                          I agree to the{" "}
                          <Link to="/terms-and-conditions">
                            Terms & Conditions
                          </Link>
                        </label>
                      </div>
                    </div>

                    <div className="md:col-span-5 mt-3">
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
                        disabled={!isChecked}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
