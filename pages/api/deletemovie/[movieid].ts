import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";
type Message = {
  message?: string;
};
export default async function deleteMovie(
  req: NextApiRequest,
  res: NextApiResponse<Message>
) {
  const { movieid } = req.query;
  const id = Number(movieid);
  if (!id) {
    return res.status(500).send({ message: "No ID provided!" });
  }
  try {
    await prisma.movie.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Error happened in deleteMovie route" });
  }
  return res.status(200).end();
}
