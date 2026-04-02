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
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* First Name */}
                <input type="text"
                    placeholder="First Name"
                    {...register("firstName", { required: "First name is required" })}
                />
                {errors.firstName && <p className="error">{errors.firstName.message}</p>}

                {/* Email */}
                <input type="email"
                    placeholder="Email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email",
                        },
                    })}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}

                {/* Gender */}
                <select {...register("gender")}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                {/* Checkbox */}
                <label className="checkbox-group">
                    <input
                        type="checkbox"
                        onChange={() => setShowExtra(!showExtra)}
                    />
                    Add Extra Fields
                </label>

                {/* Extra Fields */}
                {showExtra && (
                    <>
                        <input type="text" placeholder="Height" {...register("height")} />
                        <input type="text" placeholder="Weight" {...register("weight")} />
                    </>
                )}

                <button className="submit-btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default UserForm;