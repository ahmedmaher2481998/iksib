import {
  Control,
  FieldErrorsImpl,
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

export type productFormValues = {
  id: number;
  dine_in: boolean;
  pickable: boolean;
  has_varaiations: boolean;
  title: string;
  description: string;
  categories: number[];
  sub_categories: number[];
  addons: addonType[];
  attributes?: variantOption[];
  pricing?: {
    price: string;
    salePrice: string;
    costPerItem: string;
    location: {
      location1: string;
      location2?: string;
      location3?: string;
      location4?: string;
      location5?: string;
    };
    sku?: string;
  };
  variations?: variantsFormValues[];
};
export type variantsFormValues = {
  variation_string: string;
  variation: string[];
  cost: number;
  regular_price: number;
  sale_price: number;
  sku: string;
  barcode: string;
  inventory: {
    location1: stockLocationType;
    location2?: stockLocationType;
    location3?: stockLocationType;
    location4?: stockLocationType;
    location5?: stockLocationType;
  };
};

type stockLocationType = number;

export type variantOption = {
  name: string;
  values?: string[];
};
export type formHookType<T extends FieldValues> = {
  register: UseFormRegister<T>;
  errors: Partial<FieldErrorsImpl<T>>;
  getValues: UseFormGetValues<T>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<T, any>;
  setValue: UseFormSetValue<T>;
  watch: UseFormWatch<T>;
};
export type subCategoryType = {
  category_id: number;
  category_name: string;
  parent_id: number;
};
export type CategoryType = {
  category_id: number;
  category_name: string;
  parent_id: null | number;
  sub_categories: subCategoryType[];
};
export type addonType = {
  id: number;
  price: number;
  name: string;
};
