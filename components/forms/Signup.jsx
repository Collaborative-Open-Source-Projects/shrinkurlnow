"use client"

import React from "react"
import { useForm, FormProvider } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Signup = () => {
  const methods = useForm()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section className="flex flex-col max-w-md w-full space-y-4 section">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-full m-auto"
        >
          <Input
            type="text"
            label="Username"
            className="border border-light-primary text-light-primary dark:border-dark-primary dark:text-dark-primary focus:outline-none focus:border-light-primary focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary "
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 2,
                message: "Username must be at least 2 characters",
              },
            })}
            error={errors.username}
          />
          <Input
            type="email"
            label="Email"
            className="border border-light-primary text-light-primary dark:border-dark-primary dark:text-dark-primary focus:outline-none focus:border-light-primary focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary "
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={errors.email}
          />
          <Input
            type="password"
            label="Password"
            className="border border-light-primary text-light-primary dark:border-dark-primary dark:text-dark-primary focus:outline-none focus:border-light-primary focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary "
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            error={errors.password}
          />
          <Button
            type="submit"
            className="w-full"
          >
            Sign Up
          </Button>
        </form>
        <small className="text-center">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-semibold hover:font-bold"
          >
            Sign In
          </Link>
        </small>
      </FormProvider>
    </section>
  )
}

export default Signup
