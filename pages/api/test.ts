import { Movie } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";
import { error } from "console";

type Message = {
  message?: string;
  success?: string;
};

export default async function fakeData(
  req: NextApiRequest,
  res: NextApiResponse<Message>
) {
  const title: string = "matrix reloaded";
  const rating: number = 10;
  try {
    await prisma.movie.create({
      data: {
        title: title,
        rating: rating,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error creating movie" });
  }
  res.status(200).json({ success: "Success" });
}
