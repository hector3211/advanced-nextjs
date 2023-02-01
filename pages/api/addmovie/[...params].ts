import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

type Message = {
  message?: string;
};

export default async function createMovie(
  req: NextApiRequest,
  res: NextApiResponse<Message>
) {
  const { params } = req.query;
  const title = params?.at(0);
  const rating = Number(params?.at(1));
  if (!title || !rating) {
    return res.status(500).send({ message: "No Movie data was provided" });
  }
  try {
    await prisma.movie.create({
      data: {
        title: title,
        rating: rating,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Error creating movie" });
  }
  return res.status(200).end();
}
