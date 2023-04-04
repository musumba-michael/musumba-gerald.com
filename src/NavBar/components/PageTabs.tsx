import { Link, Typography } from "@mui/material";
import { FC } from "react";

export interface IPageTabs {
  name: string;
  id: string;
}
export const PageTabs: FC<IPageTabs> = (props) => {
  const { name, id } = props;
  return (
    <Link href={`#${id}`} sx={{ textDecoration: "none", color: "white" }}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ marginRight: 2, display: { xs: "none", md: "block" } }}
      >
        {name}
      </Typography>
    </Link>
  );
};
