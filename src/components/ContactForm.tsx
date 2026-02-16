"use client";

import { FormEvent, useState } from "react";
import { IoWarningOutline } from "react-icons/io5";

type ContactFormProps = {
    recipientEmail: string;
};

type FieldName = "fullname" | "email" | "message";

type FormValues = Record<FieldName, string>;
type FormErrors = Record<FieldName, string>;

function ContactForm({ recipientEmail }: ContactFormProps) {
    const [formData, setFormData] = useState<FormValues>({
        fullname: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState<FormErrors>({
        fullname: "",
        email: "",
        message: ""
    });
    const [touched, setTouched] = useState<Record<FieldName, boolean>>({
        fullname: false,
        email: false,
        message: false
    });
    const [activeTooltipField, setActiveTooltipField] =
        useState<FieldName | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (values: FormValues) => {
        const nextErrors: FormErrors = {
            fullname: "",
            email: "",
            message: ""
        };
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!values.fullname.trim()) {
            nextErrors.fullname = "Full Name is required.";
        }

        if (!values.email.trim()) {
            nextErrors.email = "Email is required.";
        } else if (!emailPattern.test(values.email.trim())) {
            nextErrors.email = "Email is invalid.";
        }

        if (!values.message.trim()) {
            nextErrors.message = "Message is required.";
        }

        return nextErrors;
    };

    const hasAnyError = (nextErrors: FormErrors) =>
        Object.values(nextErrors).some(Boolean);

    const handleFieldChange = (field: FieldName, value: string) => {
        const nextFormData = { ...formData, [field]: value };
        setFormData(nextFormData);

        if (touched[field]) {
            setErrors(validateForm(nextFormData));
        }
    };

    const handleFieldBlur = (field: FieldName) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
        setErrors(validateForm(formData));
    };

    const toggleTooltip = (field: FieldName) => {
        setActiveTooltipField((prev) => (prev === field ? null : field));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nextErrors = validateForm(formData);
        setErrors(nextErrors);
        setTouched({
            fullname: true,
            email: true,
            message: true
        });

        if (hasAnyError(nextErrors)) {
            return;
        }

        setIsSubmitting(true);

        const senderName = formData.fullname.trim();
        const senderEmail = formData.email.trim();
        const senderMessage = formData.message.trim();
        const sentAt = new Date().toLocaleString();

        const subject = `[Portfolio] New message from ${senderName}`;
        const body = [
            `Hello,`,
            ``,
            `You received a new message from your portfolio contact form.`,
            ``,
            `Contact Details`,
            `- Name: ${senderName}`,
            `- Email: ${senderEmail}`,
            `- Sent at: ${sentAt}`,
            ``,
            `Message`,
            `----------------------------------------`,
            `${senderMessage}`,
            `----------------------------------------`,
            ``,
            `Best regards,`,
            `${senderName}`
        ].join("\n");
        const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.open(mailtoUrl, "_blank", "noopener,noreferrer");

        setIsSubmitting(false);
        setFormData({
            fullname: "",
            email: "",
            message: ""
        });
        setErrors({
            fullname: "",
            email: "",
            message: ""
        });
        setTouched({
            fullname: false,
            email: false,
            message: false
        });
        setActiveTooltipField(null);
    };

    return (
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="relative">
                <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    id="fullname"
                    className={`input-box pr-11 w-full ${
                        touched.fullname && errors.fullname
                            ? "border-red-500 focus:border-red-500"
                            : ""
                    }`}
                    autoComplete="off"
                    value={formData.fullname}
                    onChange={(event) =>
                        handleFieldChange("fullname", event.target.value)
                    }
                    onBlur={() => handleFieldBlur("fullname")}
                    aria-invalid={Boolean(touched.fullname && errors.fullname)}
                    aria-describedby={
                        touched.fullname && errors.fullname
                            ? "fullname-error-message"
                            : undefined
                    }
                />
                {touched.fullname && errors.fullname && (
                    <button
                        type="button"
                        className="group absolute right-3 top-3 text-red-500"
                        aria-label="Show full name validation error"
                        onClick={() => toggleTooltip("fullname")}
                    >
                        <IoWarningOutline className="text-lg" />
                        <span
                            id="fullname-error-message"
                            className={`pointer-events-none absolute right-0 top-[calc(100%+6px)] z-10 w-56 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-left text-xs text-red-700 shadow-md transition-opacity ${
                                activeTooltipField === "fullname"
                                    ? "opacity-100"
                                    : "opacity-0"
                            } md:group-hover:opacity-100`}
                        >
                            {errors.fullname}
                        </span>
                    </button>
                )}
            </div>

            <div className="relative">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="email"
                    className={`input-box pr-11 w-full ${
                        touched.email && errors.email
                            ? "border-red-500 focus:border-red-500"
                            : ""
                    }`}
                    autoComplete="off"
                    value={formData.email}
                    onChange={(event) =>
                        handleFieldChange("email", event.target.value)
                    }
                    onBlur={() => handleFieldBlur("email")}
                    aria-invalid={Boolean(touched.email && errors.email)}
                    aria-describedby={
                        touched.email && errors.email
                            ? "email-error-message"
                            : undefined
                    }
                />
                {touched.email && errors.email && (
                    <button
                        type="button"
                        className="group absolute right-3 top-3 text-red-500"
                        aria-label="Show email validation error"
                        onClick={() => toggleTooltip("email")}
                    >
                        <IoWarningOutline className="text-lg" />
                        <span
                            id="email-error-message"
                            className={`pointer-events-none absolute right-0 top-[calc(100%+6px)] z-10 w-56 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-left text-xs text-red-700 shadow-md transition-opacity ${
                                activeTooltipField === "email"
                                    ? "opacity-100"
                                    : "opacity-0"
                            } md:group-hover:opacity-100`}
                        >
                            {errors.email}
                        </span>
                    </button>
                )}
            </div>

            <div className="relative">
                <textarea
                    name="message"
                    placeholder="Message"
                    id="message"
                    rows={3}
                    className={`input-box pr-11 w-full ${
                        touched.message && errors.message
                            ? "border-red-500 focus:border-red-500"
                            : ""
                    }`}
                    autoComplete="off"
                    value={formData.message}
                    onChange={(event) =>
                        handleFieldChange("message", event.target.value)
                    }
                    onBlur={() => handleFieldBlur("message")}
                    aria-invalid={Boolean(touched.message && errors.message)}
                    aria-describedby={
                        touched.message && errors.message
                            ? "message-error-message"
                            : undefined
                    }
                />
                {touched.message && errors.message && (
                    <button
                        type="button"
                        className="group absolute right-3 top-3 text-red-500"
                        aria-label="Show message validation error"
                        onClick={() => toggleTooltip("message")}
                    >
                        <IoWarningOutline className="text-lg" />
                        <span
                            id="message-error-message"
                            className={`pointer-events-none absolute right-0 top-[calc(100%+6px)] z-10 w-56 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-left text-xs text-red-700 shadow-md transition-opacity ${
                                activeTooltipField === "message"
                                    ? "opacity-100"
                                    : "opacity-0"
                            } md:group-hover:opacity-100`}
                        >
                            {errors.message}
                        </span>
                    </button>
                )}
            </div>

            <button
                type="submit"
                className="action-btn btn-scale-anim"
                disabled={isSubmitting}
            >
                {isSubmitting ? "SENDING..." : "SUBMIT"}
            </button>
        </form>
    );
}

export default ContactForm;
