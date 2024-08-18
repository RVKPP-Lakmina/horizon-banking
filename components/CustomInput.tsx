import React from "react";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authformSchema } from "@/lib/utils";

const formSchema = authformSchema("sign-up");

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  label: string;
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder?: string;
}

const CustomInput = ({
  control,
  label,
  name,
  placeholder,
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-lable">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder ? placeholder : `Enter your ${label}`}
                type={name === "password" ? "password" : "text"}
                className="input-class"
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-3" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
