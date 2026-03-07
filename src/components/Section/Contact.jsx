import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageSquare,
} from "lucide-react";
import FadeIn from "../Animations/FadeIn";

const PERSONAL_INFO = {
  email: "krishdevcraft@gmail.com",
  location: "India",
};

const SOCIAL_LINKS = [
  { key: "github",   href: "https://github.com/KrishDevCrafting",                     Icon: Github   },
  { key: "linkedin", href: "https://linkedin.com/in/krishdevcraft",                    Icon: Linkedin },
  { key: "twitter",  href: "https://twitter.com/krishdevcraft",                        Icon: Twitter  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus]     = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address" });
      return;
    }

    setStatus({ type: "success", message: "Message sent successfully! 🎉" });
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus({ type: "", message: "" }), 5000);
  };

  return <div>Contact</div>;
};

export default Contact;
