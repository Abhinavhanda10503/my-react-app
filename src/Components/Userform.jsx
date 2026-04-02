import { useForm } from "react-hook-form";
import { useState } from "react";
import "../assets/css/UserForm.css";

function UserForm({ onSubmit, defaultValues = {} }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const [showExtra, setShowExtra] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      {/* First Name */}
      <input
        placeholder="First Name"
        {...register("firstName", { required: "First name is required" })}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      {/* Email */}
      <input
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      {/* Gender */}
      <select {...register("gender")}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      {/* Dynamic Fields Toggle */}
      <label>
        <input
          type="checkbox"
          onChange={() => setShowExtra(!showExtra)}
        />
        Add Extra Fields
      </label>

      {/* Extra Fields */}
      {showExtra && (
        <>
          <input
            placeholder="Height"
            {...register("height")}
          />
          <input
            placeholder="Weight"
            {...register("weight")}
          />
        </>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;