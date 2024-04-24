import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const countAllProducts = async () => {
  return await prisma.product.count();
};

export const countAllProductsOnStock = async (uuid) => {
  return await prisma.product.count({
    where: {
      stocks: {
        some: {
          uuid: uuid,
        },
      },
    },
  });
};

export const countProduct = async (sku) => {
  return await prisma.product.count({
    where: {
      sku: sku,
    },
  });
};

export const countProductOnStock = async (uuid, sku) => {
  return await prisma.product.count({
    where: {
      sku: sku,
      stocks: {
        some: {
          uuid: uuid,
        },
      },
    },
  });
};

export const countProductByCategory = async (slug) => {
  return await prisma.product.count({
    where: {
      categories: {
        some: {
          slug: slug,
        },
      },
    },
  });
};

export const countProductOnStockByCategory = async (uuid, slug) => {
  return await prisma.product.count({
    where: {
      categories: {
        some: {
          slug: slug,
        },
      },
      stocks: {
        some: {
          uuid: uuid,
        },
      },
    },
  });
};
