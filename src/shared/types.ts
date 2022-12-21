import {
  Control,
  FieldErrorsImpl,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

export type formValues = {
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
  pricing: {
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
};
export type variantOption = {
  inputValue?: string;
  name: string;
  values?: string[];
};
export type formHookType = {
  register: UseFormRegister<formValues>;
  errors: Partial<FieldErrorsImpl<formValues>>;
  getValues: UseFormGetValues<formValues>;
  control: Control<formValues, any>;
  setValue: UseFormSetValue<formValues>;
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
