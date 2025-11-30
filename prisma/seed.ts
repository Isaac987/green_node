import { prisma } from "@/lib/prisma";

/**
 * Seeds the database with a predefined list of plant names, creating any missing records and logging progress.
 *
 * Existing plant records with the same names are left unchanged; new records are created idempotently.
 */
async function main() {
  const plants = [
    { name: "Monstera" },
    { name: "Fiddle Leaf Fig" },
    { name: "Snake Plant" },
    { name: "Pothos" },
    { name: "Aloe Vera" },
  ];

  console.log(`Start seeding ...`);

  for (const p of plants) {
    const plant = await prisma.plant.upsert({
      where: { name: p.name },
      update: {}, // No updates if it exists
      create: {
        name: p.name,
      },
    });
    console.log(`Created plant with id: ${plant.id} and name: ${plant.name}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });