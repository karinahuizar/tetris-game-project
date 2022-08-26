import React from "react";
import { StyledCell } from "./Cell.styles";
import { TETROMINOS } from "../../setup";

type Props = {
    type: keyof typeof TETROMINOS;
};