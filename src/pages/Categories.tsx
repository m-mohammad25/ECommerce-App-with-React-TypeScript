import { useEffect } from "react";
import {
  actGetCategories,
  cleanUpCategoriesRecords,
} from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Container } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import GridList from "@components/Common/GridList/GridList";
import { TCategory } from "@customTypes/category";
import { Heading } from "@components/Common";

const Categories = () => {
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

  return (
    <Container>
      <Heading title="Categories" />
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
