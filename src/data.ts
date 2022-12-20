import { CategoryType } from "./shared/types";

export const product = {
  product: {
    id: "1",
    title: "Batates",
    description: "Batates Ketchup Mayo",
    dine_in: true,
    pickable: true,
    has_varaiations: true,
    //CATEGORIES AND SUB CATEGORY IDs
    categories: [1, 2, 5],
    attributes: [
      {
        name: "Size",
        values: ["S", "M", "L"],
      },
      {
        name: "Color",
        values: ["Red", "Blue", "Yellow"],
      },
    ],
    variations: [
      {
        cost: 12.5,
        regular_price: 20.0,
        sale_price: 10.0,
        sku: "132123e3213e21",
        barcode: "barcode132123e3213e21",
        variation_string: "S-Red",
        stock: [
          {
            branch_id: 1,
            branch_name: "branch_1",
            quantitiy: 50,
          },
          {
            branch_id: 1,
            branch_name: "branch_2",
            quantitiy: 100,
          },
        ],
      },
      {
        cost: 12.5,
        regular_price: 20.0,
        sale_price: 10.0,
        sku: "132123e3213e21",
        barcode: "barcode132123e3213e21",
        variation_string: "M-Red",
        stcock: [
          {
            branch_id: 1,
            branch_name: "branch_1",
            quantitiy: 50,
          },
          {
            branch_id: 1,
            branch_name: "branch_2",
            quantitiy: 100,
          },
        ],
      },
      {
        cost: 12.5,
        regular_price: 20.0,
        sale_price: 10.0,
        sku: "132123e3213e21",
        barcode: "barcode132123e3213e21",
        variation_string: "S-Blue",
        stcock: [
          {
            branch_id: 1,
            quantitiy: 50,
          },
          {
            branch_id: 1,
            quantitiy: 100,
          },
        ],
      },
    ],
  },
};
export const categories = [
  {
    category_id: 1,
    category_name: "Food",
    parent_id: null,
    sub_categories: [
      {
        category_id: 3,
        category_name: "Bread",
        parent_id: 1,
      },
      {
        category_id: 4,
        category_name: "Cerals",
        parent_id: 1,
      },
    ],
  },
  {
    category_id: 2,
    category_name: "Drinks",
    parent_id: null,
    sub_categories: [
      {
        category_id: 5,
        category_name: "Hot Drinks",
        parent_id: 2,
      },
      {
        category_id: 6,
        category_name: "Cold Drinks",
        parent_id: 2,
      },
    ],
  },
] as CategoryType[];
export const addOns = [
  {
    id: 1,
    price: 10.0,
    name: "Extra Cheese",
  },
  {
    id: 2,
    price: 5.0,
    name: "Extra Ketchup",
  },
];
export const branches = [
  {
    branch_id: 1,
    branch_name: "Dokki Branch",
  },
  {
    branch_id: 2,
    branch_name: "Haram Branch",
  },
  {
    branch_id: 3,
    branch_name: "Giza Branch",
  },
];
