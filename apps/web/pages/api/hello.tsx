import type { NextApiRequest, NextApiResponse } from "next";
import sendMail from "emails/emails";
import AccountCreated from "emails/emails/AccountCreated";

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  await sendMail({
    component: <AccountCreated name="John" />,
  });

  res.status(200).json({ name: "John Doe" });
};
