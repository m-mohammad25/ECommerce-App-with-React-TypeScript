import { useEffect } from "react";
import {
  actGetCategories,
  cleanUpCategoriesRecords,
} from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";

function useCategories() {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if (!records.length) {
      //if categories state is empty, fetch all records
      dispatch(actGetCategories());
    }
    return () => {
      dispatch(cleanUpCategoriesRecords());
    };
  }, []);

  return { loading, error, records };
}

export default useCategories;
