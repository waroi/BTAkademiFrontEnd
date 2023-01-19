import GetNews from "./GetNews";
import { GridColumn, GridRow } from "./Grid";

const GetNewsList = () => {
  return (
    <GridRow>
      <GridColumn col="4">
        <GetNews />
        <GetNews />
        <GetNews />
        <GetNews />
        <GetNews />
      </GridColumn>
    </GridRow>
  );
};

export default GetNewsList;
