"use client";

import React, { useState } from "react";
import { ScreenWrapper } from "../common/screen-wrapper";
import { cn } from "@/lib/utils";

export const Senco = () => {
  return (
    <ScreenWrapper className="bg-neutral-100 p-20 flex-col">
      <div className="max-w-5xl w-full flex flex-col gap-4">
        <div className="grid-cols-1 grid lg:grid-cols-[320px_1fr] gap-6">
          <LeftCard />
          <RightCard />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
          <GoogleMap />
          <BookAppoinmentForm />
        </div>
      </div>
    </ScreenWrapper>
  );
};

const LeftCard = () => {
  return (
    <Card className="p-0 overflow-hidden rounded-2xl">
      <CardHeader className="p-4">
        <CardTitle>Senco Gold And Diamonds - Mumbai</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-semibold">Address -</p>
            <p className="text-neutral-600 text-sm">
              Mayfair Kumkum Building , Plot No -11,, Sv Road, Andheri West,
              Opposite Sangita Hospital, Mumbai - 40005
            </p>
          </div>
          <div>
            <p className="font-semibold">Time -</p>
            <p className="text-neutral-600 text-sm">Open Untill 9:00 PM</p>
          </div>
          <div>
            <p className="font-semibold">Phone -</p>
            <p className="text-neutral-600 text-sm">7605087448 / 9147132392</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <CTAButton className="rounded-full">Get Directions</CTAButton>
          <CTAButton className="rounded-full">Call Now</CTAButton>
          <CTAButton className="rounded-full">Book an Appointment</CTAButton>
        </div>
      </CardContent>
    </Card>
  );
};

const TIMINGS = [
  "mon 11:00 AM - 9:00 PM",
  "tue 11:00 AM - 9:00 PM",
  "wed 11:00 AM - 9:00 PM",
  "thu 11:00 AM - 9:00 PM",
  "fri 11:00 AM - 9:00 PM",
  "sat 11:00 AM - 9:30 PM",
  "sun 11:00 AM - 9:30 PM",
];

const PAYMENT_OPTIONS = [
  "RTGS",
  "NEFT",
  "UPI",
  "Cash",
  "Cards",
  "Online Wallets",
  "Senco Gift Card",
];

const LANGUAGES = ["Marathi", "Hindi", "English", "Bengali", "Gujrati"]; // TODO: add line after each language

const RightCard = () => {
  return (
    // <Card>
    //   <CardContent className="h-full">
    <div className="h-full grid grid-cols-1 md:grid-cols-[40%_1fr] gap-4">
      <Card>
        <CardContent>
          <div className="left-side-bento h-full flex flex-col gap-2">
            <BentoGridTitle>Business Hours</BentoGridTitle>
            <div className="flex flex-col gap-2">
              {TIMINGS.map((time) => {
                return <p key={time}>{time}</p>;
              })}
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="right-side-bento h-full grid grid-rows-2 gap-4">
        <Card>
          <CardContent>
            <div className="h-full flex flex-col gap-2">
              <BentoGridTitle>Payment Options</BentoGridTitle>
              <div className="overflow-hidden flex flex-wrap gap-1.5">
                {PAYMENT_OPTIONS.map((option, idx) => {
                  return (
                    <p key={option} className="flex items-center gap-1.5">
                      {option}
                      {PAYMENT_OPTIONS.length - 1 !== idx && <span>|</span>}
                    </p>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-2 h-full gap-4">
          <Card>
            <CardContent>
              <div className="h-full flex flex-col gap-2">
                <BentoGridTitle>Language Spoken</BentoGridTitle>
                <div className="overflow-hidden flex flex-wrap gap-1.5">
                  {LANGUAGES.map((language) => {
                    return <p key={language}>{language}</p>;
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="h-full flex flex-col gap-2">
                <BentoGridTitle>Parking Option</BentoGridTitle>
                <p>OWN PARKING</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    //   </CardContent>
    // </Card>
  );
};

const BentoGridTitle = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("text-lg font-semibold text-[#ea3a3e]", className)}>
      {children}
    </h3>
  );
};

const CTAButton = ({
  className,
  children,
  ...props
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={cn(
        "h-8 rounded-md px-4 py-2 border-2 border-[#ea3a3e] text-sm font-semibold flex items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full rounded-xl bg-white text-black p-4 flex flex-col shadow-md border border-neutral-100",
        className,
      )}
    >
      {children}
    </div>
  );
};

const CardHeader = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("bg-[#EA3A3E] text-white", className)}>{children}</div>
  );
};

const CardTitle = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <h3 className={cn("text-lg font-semibold", className)}>{children}</h3>;
};

const CardContent = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <div className={cn("flex flex-col gap-4", className)}>{children}</div>;
};

const GoogleMap = () => {
  return (
    <Card className="h-full">
      <CardContent className="justify-center h-full items-center">
        <p className="text-2xl font-semibold">Google Map</p>
      </CardContent>
    </Card>
  );
};

const BookAppoinmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setValidationErrors((prevValidationErrors) => ({
      ...prevValidationErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName) {
      errors.fullName = "Full name can't be empty";
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number can't be empty";
    }

    if (!formData.email) {
      errors.email = "Email can't be empty.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.values(errors).length) {
      setValidationErrors((prevValidationErrors) => ({
        ...prevValidationErrors,
        ...errors,
      }));
      return;
    }

    console.log("Submit kar");
  };

  return (
    <Card className="p-0 overflow-hidden">
      <CardHeader className="p-4">
        <CardTitle>Book an Appointment</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <form className="flex flex-col gap-4">
          <LabelInputContainer>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="Enter full name"
              name={"fullName"}
              value={formData.fullName}
              onChange={handleInputChange}
            />
            {validationErrors.fullName && (
              <p className="text-sm text-red-500">
                {validationErrors.fullName}
              </p>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="phone-number">Phone Number</Label>
            <Input
              id="phone-number"
              placeholder="Enter phone number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            {validationErrors.phoneNumber && (
              <p className="text-sm text-red-500">
                {validationErrors.phoneNumber}
              </p>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter email address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {validationErrors.email && (
              <p className="text-sm text-red-500">{validationErrors.email}</p>
            )}
          </LabelInputContainer>
          <button
            onClick={handleSubmit}
            className="h-8 rounded-md bg-[#EA3A3E] text-white font-semibold text-sm px-3 py-2 flex items-center justify-center"
          >
            Book Appointment
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "w-full h-8 rounded-md text-sm placeholder:text-neutral-500 border border-[#EA3A3E] px-2 outline-none focus-visible:ring-2 focus-visible:ring-red-300",
        className,
      )}
      {...props}
    />
  );
};

const LabelInputContainer = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("flex flex-col gap-1", className)}>{children}</div>;
};

const Label = ({
  className,
  htmlFor,
  children,
  ...props
}: {
  className?: string;
  htmlFor: string;
  children: React.ReactNode;
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("font-semibold text-sm", className)}
      {...props}
    >
      {children}
    </label>
  );
};
