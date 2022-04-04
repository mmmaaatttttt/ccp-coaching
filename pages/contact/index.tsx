import type { NextPage } from "next";
import { InlineWidget } from "react-calendly";

const Contact: NextPage = () => {
  return (
    <div>
      <InlineWidget url="https://calendly.com/ccpcoachmeg/30min" />
    </div>
  );
};

export default Contact;
