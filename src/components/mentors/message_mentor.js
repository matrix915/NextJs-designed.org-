import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";
import imageLoader from "/src/components/utilities/imageLoader";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";

// Page Images
import mentorChat from "/src/assets/images/mentor-chat.svg";
import axios from "axios";
import classNames from "classnames";
import { INSERT_MENTOR_EMAIL } from "../../../data/mutations/mentorEmails";

export default function SendMessageModal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const [insertMentorEmail] = useMutation(INSERT_MENTOR_EMAIL);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const sendEmail = async () => {
    setSending(true);

    try {
      await axios
        .post(process.env.NEXT_PUBLIC_SEND_EMAIL_ENDPOINT, {
          message,
          toEmail: props.mentor.email,
          name: props.mentor.first_name,
          replyName: `${props.user.first_name} ${props.user.last_name}`,
          replyEmail: props.user.email,
          country: props.user.country,
        })
        .then((res) => res.data);

      await insertMentorEmail({
        variables: {
          mentorEmail: {
            mentor_email: props.mentor.email,
            mentee_email: props.user.email,
          },
        },
      });

      closeModal();

      toast.success("Email sent to mentor", {
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false,
        position: "bottom-center",
      });
    } catch (err) {
      console.log(err);
    }

    setSending(false);
  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="button full-width donate mt-3"
        >
          Send Message
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-x-hidden bg-[#fff] bg-opacity-90 transition-all z-50"
          onClose={() => {}}
        >
          <div className="min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              static="true"
              enter="ease-out duration-300"
              enterFrom="opacity-0 -translate-y-8"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 translate-y-8"
            >
              <div className="inline-block w-full max-w-5xl h-auto min-h-[600px] p-9 my-8 min-h-full text-left align-middle transition-all transform bg-white shadow-3xl rounded-xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Message {props.mentor.first_name}
                </Dialog.Title>
                <div className="row">
                  <div className="col-md-8">
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      className="form-control mt-3"
                      name="message"
                      rows="16"
                      maxLength={2000}
                      placeholder={
                        "Introduce yourself to " +
                        props.mentor.first_name +
                        ", make sure to share your goals!"
                      }
                    />
                  </div>
                  <div className="col-md-4">
                    <div className="mentorImage">
                      <Image
                        loader={imageLoader}
                        layout="fill"
                        objectFit="cover"
                        className="mentorImage"
                        src={mentorChat}
                      />
                    </div>
                    <div class="mentoring-email-hint mt-3">
                      <h4>
                        <strong>Mentee Tips</strong>
                      </h4>
                      <p className="mt-2">
                        Reaching out to a mentor can feel intimidating, but
                        <strong> don't worry</strong> they want to hear from
                        you!
                      </p>
                      <p>
                        Make sure you share information about your background
                        and what your goals in the design field are to give this
                        mentor a better idea of what you need help with today.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    type="button"
                    className={classNames(
                      "button   mr-2",
                      isSending ? "secondary" : "primary donate"
                    )}
                    onClick={sendEmail}
                    disabled={isSending}
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    className="button secondary"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
