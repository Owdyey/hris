"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginCredentialsType } from "@/types/form";
import Link from "next/link";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function LoginForm() {
  const { control, handleSubmit } = useForm<LoginCredentialsType>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onsubmit: SubmitHandler<LoginCredentialsType> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-[445px]">
      <form className="grid gap-[30px]" onSubmit={handleSubmit(onsubmit)}>
        <div className="grid gap-2">
          <p className="text-3xl font-semibold">Welcome</p>
          <p className="text-gray-500">Please login here</p>
        </div>
        <div className="grid gap-5">
          <Field>
            <FieldLabel htmlFor="input-id">Email</FieldLabel>
            <Controller
              name="email"
              control={control}
              render={({ field }) => {
                return (
                  <Input
                    {...field}
                    placeholder="Enter your email here..."
                    autoComplete="off"
                  />
                );
              }}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="input-id">Password</FieldLabel>
            <Controller
              name="password"
              control={control}
              render={({ field }) => {
                return (
                  <Input
                    {...field}
                    placeholder="Enter your password here..."
                    type="password"
                    autoComplete="off"
                  />
                );
              }}
            />
          </Field>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Remember Me</Label>
            </div>
            <Link href={"/forgot-password"} className="text-primary-foreground">
              Forgot Password?
            </Link>
          </div>
        </div>

        <Button
          className="w-full text-[16px] font-light"
          size={"lg"}
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
