import {useState} from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
export default function useEmail() {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (payload: any) => {
    payload.reply_to = payload.email;

    if (payload?.name?.trim() === "") return toast.error("Need a valid name.");
    if (payload?.email?.trim() === "")
      return toast.error("Need a valid email.");
    if (payload?.message?.trim() === "")
      return toast.error("Need a valid message.");

    setLoading(true);

    try {
      await toast.promise(
        emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE as string,
          process.env.NEXT_PUBLIC_TEMPLATE as string,
          payload,
          process.env.NEXT_PUBLIC_KEY
        ),
        {
          loading: "Sending message...",
          success: <b>Message sent</b>,
          error: <b>Error sending the message.</b>,
        }
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return {loading, sendEmail};
}
