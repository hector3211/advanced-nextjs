export declare global {
  var prisma: PrismaClient | udefined;
}

export type Movie = {
  id: number;
  title: string;
  rating: number;
};
