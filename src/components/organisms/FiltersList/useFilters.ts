import { useAppSelector, useAppDispatch } from "store/hooks";
import { useState } from "react";
import { IFiltersState } from "store/Filters/Types";
import { EFilterMehods } from "./helpers";
import { ChangeEvent, MouseEvent } from "react";
import { EFilterActionTypes } from "store/Filters/Types";

export const useFilters = () => {
  const currentFilters = useAppSelector((state) => state.filtersReducer);
  const dispatch = useAppDispatch();
  const [newFilters, setNewFilters] = useState<IFiltersState>(currentFilters);

  const handleCheckboxesChange = (
    filterMethod: EFilterMehods,
    valueArr: string[],
    filterName: string
  ) => {
    if (valueArr.length) {
      setNewFilters((prevState) => {
        return {
          ...prevState,
          [filterName as keyof IFiltersState]: {
            field: filterName,
            how: filterMethod,
            value: valueArr,
          },
        };
      });
    } else {
      setNewFilters((prevState) => {
        return { ...prevState, [filterName as keyof IFiltersState]: null };
      });
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    filterMethod: EFilterMehods
  ) => {
    let { name: filterName, value: newValue } = event.target;

    if (newValue) {
      setNewFilters((prevState) => {
        return {
          ...prevState,
          [filterName as keyof IFiltersState]: {
            field: filterName,
            how: filterMethod,
            value: Number(newValue),
          },
        };
      });
    } else {
      setNewFilters((prevState) => {
        event.target.value = "";
        return { ...prevState, [filterName as keyof IFiltersState]: null };
      });
    }
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name: filterName, value: newValue } = event.target;

    if (newValue) {
      setNewFilters((prevState) => {
        return {
          ...prevState,
          [filterName as keyof IFiltersState]: {
            field: filterName,
            how: "==",
            value: newValue,
          },
        };
      });
    } else {
      setNewFilters((prevState) => {
        return { ...prevState, [filterName as keyof IFiltersState]: null };
      });
    }
  };

  const handleSetNewFilters = (event: MouseEvent) => {
    dispatch({ type: EFilterActionTypes.SET_FILTERS, payload: newFilters });
  };

  return {
    handleSetNewFilters,
    handleInputChange,
    handleSelectChange,
    handleCheckboxesChange,
  };
};
