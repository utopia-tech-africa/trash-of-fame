"use client";

import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactPattern } from "@/assets/images";
import { ChevronsRight, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

// schema
const formSchema = z.object({
  fullName: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(6, "Required"),
  interest: z.string().min(1, "Required"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const interests = ["Partnerships", "Distribution", "Retail", "Other"];

export const Contact = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  const onSubmit = async (data: FormData) => {
    setSubmitStatus({ type: null, message: null });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            result.message ||
            "Thank you! Your message has been sent successfully.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    }
  };

  return (
    <section className="relative border-[#2b1f13] border-b border-t flex flex-col lg:flex-row items-center lg:items-stretch justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-15 text-white overflow-hidden mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32">
      <Image
        src={ContactPattern}
        alt="pattern"
        fill
        className="object-cover opacity-4 pointer-events-none"
        priority
      />
      <div className="absolute bottom-[-40%] left-[-20%] w-125 h-125 md:w-175 md:h-175 bg-[radial-gradient(circle,rgba(120,72,28,0.35)_0%,rgba(15,10,6,0)_70%)] pointer-events-none" />
      {/* left */}
      <div className=" flex-col gap-3 py-6 sm:py-8 w-full text-center lg:text-left lg:w-1/2">
        <h1 className=" hidden md:flex font-bold leading-[1.2] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#fff8f1] uppercase">
          Your moment to act is now
        </h1>

        <h1 className="block md:hidden font-bold leading-[1.2] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#fff8f1] uppercase">
          Your moment to act <br />
          is now
        </h1>

        <p className="text-sm sm:text-base md:text-[18px] text-[#fff8f1] mx-auto lg:mx-0 max-w-md">
          The waste crisis won&apos;t wait. Neither should you. Step into this
          movement and help reshape Africa&apos;s future.
        </p>
      </div>
      <div className="w-full h-px bg-[#2b1f13] my-6 -mx-4 sm:-mx-6 md:-mx-8 lg:mx-0 lg:w-px lg:h-auto lg:self-stretch lg:my-0" />
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 py-6 sm:py-8 w-full max-w-xl lg:w-1/2"
      >
        {/* name */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[14px]">
            Full name <span className="text-[#c01a00f7]">*</span>
          </label>
          <Input
            placeholder="John Doe"
            {...register("fullName")}
            disabled={isSubmitting}
            className="border-[#654829] p-3 bg-transparent text-[#617677] placeholder:text-[#617677] w-full"
          />
          {errors.fullName && (
            <p className="text-sm text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        {/* email */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[14px]">
            Email <span className="text-[#c01a00]">*</span>
          </label>
          <Input
            type="email"
            placeholder="example@email.com"
            {...register("email")}
            disabled={isSubmitting}
            className="border-[#654829] p-3 bg-transparent text-[#617677] placeholder:text-[#617677] w-full"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* phone */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[14px]">
            Phone <span className="text-[#c01a00]">*</span>
          </label>
          <div className="border border-[#654829] flex items-center p-2 w-full bg-transparent">
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <PhoneInput
                  international
                  defaultCountry="GH"
                  value={field.value}
                  onChange={field.onChange}
                  disabled={isSubmitting}
                  className="w-full bg-transparent text-[#617677]"
                />
              )}
            />
          </div>
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* interest */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[14px]">
            What are you interested in?{" "}
            <span className="text-[#c01a00]">*</span>
          </label>
          <Controller
            control={control}
            name="interest"
            render={({ field }) => (
              <select
                {...field}
                disabled={isSubmitting}
                className="border border-[#654829] p-3 w-full bg-transparent text-[#617677]"
              >
                <option value="">Select an option</option>
                {interests.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.interest && (
            <p className="text-sm text-red-500">{errors.interest.message}</p>
          )}
        </div>

        {/* msg */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[14px]">Message</label>
          <Textarea
            {...register("message")}
            disabled={isSubmitting}
            rows={5}
            className="border-[#654829] p-3 bg-transparent text-[#617677] placeholder:text-[#617677] resize-none h-29.25 w-full"
          />
        </div>

        {/* Status Messages */}
        {submitStatus.type === "success" && (
          <div className="flex items-center gap-2 p-4 mb-4 text-sm bg-green-500/10 border border-green-500/50 text-green-500 rounded-md">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <p>{submitStatus.message}</p>
          </div>
        )}
        {submitStatus.type === "error" && (
          <div className="flex items-center gap-2 p-4 mb-4 text-sm bg-red-500/10 border border-red-500/50 text-red-500 rounded-md">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p>{submitStatus.message}</p>
          </div>
        )}

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#654829] cursor-pointer border z-10 border-[#402f1d] flex gap-2.5 items-center justify-center px-6 py-3 w-full text-white hover:bg-[#654829]/80 transition-colors ease-in duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="font-semibold text-[18px]">
            {isSubmitting ? "Submitting..." : "Submit"}
          </span>
          <ChevronsRight className="w-4.5 h-4.5" />
        </Button>
      </form>
    </section>
  );
};
