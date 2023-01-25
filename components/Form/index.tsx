"use client";

import type { InputFieldProps } from "@pTypes/uiTypes";
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    submitted?: boolean;
    submitting?: boolean;
    info: { error: boolean; msg: string | null };
  }>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    fetch(`${process.env.FORMSPREE_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        console.log("response", response);
        handleServerResponse(
          true,
          "Thanks you, your message has been submitted"
        );
      })
      .catch((error) => {
        console.log(error);
        handleServerResponse(
          false,
          "Oops! There was a problem submitting your"
        );
      });
  };

  return (
    <>
      <form className="w-full max-w-md space-y-6" onSubmit={handleOnSubmit}>
        <InputField
          label="Name & Company"
          name="name"
          type="text"
          value={form.name}
          placeholder="Elon Must from Mars."
          onChange={(e) => handleOnInputChange(e)}
          required
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          placeholder="john@doe.me"
          onChange={(e) => handleOnInputChange(e)}
          required
        />
        <TextField
          type="text"
          label="Message"
          name="message"
          value={form.message}
          placeholder="Hello"
          onChange={(e) => handleOnInputChange(e)}
          required
        />
        <button
          type="submit"
          className="flex h-fit w-fit items-center justify-center border-2 border-white bg-white px-8 py-3 hover:bg-gray-100"
          disabled={status.submitting}
        >
          <span className="inline-block w-full text-sm font-semibold capitalize text-gray-800">
            {!status.submitting
              ? !status.submitted
                ? "Send"
                : "Sent"
              : "Sending..."}
          </span>
        </button>
      </form>
      {status.info.error && (
        <p className="text-base text-white">Error: {status.info.msg}</p>
      )}
      {!status.info.error && status.info.msg && (
        <p className="text-base text-white">{status.info.msg}</p>
      )}
    </>
  );
};

const InputField = ({
  label,
  name,
  type,
  placeholder,
  value,
  required,
  onChange,
}: InputFieldProps) => {
  return (
    <label htmlFor={name} className="flex flex-col space-y-2">
      <span className="font-semibold text-turquoise">{label}</span>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className="rounded-md border-2 border-turquoise-darker bg-turquoise-dark py-2 px-4 text-white"
        required={required}
        onChange={onChange}
      />
    </label>
  );
};

const TextField = ({
  label,
  name,
  value,
  placeholder,
  required,
  onChange,
}: InputFieldProps) => {
  return (
    <label htmlFor={name} className="flex flex-col">
      <span className="font-semibold text-turquoise">{label}</span>
      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        className="rounded-md border-2 border-turquoise-darker bg-turquoise-dark py-2 px-4 text-white"
        required={required}
        onChange={onChange}
      />
    </label>
  );
};
