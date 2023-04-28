import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

function Form() {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Name is required"),
    email: yup.string().email().required("Email is required"),
    age: yup.number().positive().integer().min(16).required("Age is required and must be at least 16 years old."),
    password: yup.string().min(4).max(20).required(),
    conpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password donot match")
      .required(),
  });

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name....."
          {...register("fullName")}
        />
        <p>{errors.fullName?.message}</p>
        <input type="email" placeholder="Email....." {...register("email")} />
        <p>{errors.email?.message}</p>
        <input type="number" placeholder="Age....." {...register("age")} />
        <p>{errors.age?.message}</p>
        <input
          type="password"
          placeholder="Password...."
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <input
          type="password"
          placeholder="Confirm Password...."
          {...register("conpassword")}
        />
        <p>{errors.conpassword?.message}</p>
        <input type="submit" />
      </form>
      <p></p>
    </div>
  );
}

export default Form;
