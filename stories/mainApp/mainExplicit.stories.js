import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import MAIN_APP from "./directories";

import Folio, { Form, Grid, Cell, GridItem } from "../../src";
//
storiesOf(`${MAIN_APP}/explicit`, module).add("example", () => (
  <Folio>
    <Form
      onSubmit={action("onSubmit")}
      style={{
        backgroundColor: "rgb(247, 247, 247)",
        padding: "20px"
      }}
    >
      <Grid rowWidth="45px">
        <GridItem
          col={3}
          row={1}
          toRow={4}
          style={{
            backgroundColor: "red"
          }}
          isHorizontal={false}
        >
          <label>col= 3 & row= 1-4</label>
          <Cell />
        </GridItem>
        <GridItem
          col={1}
          toCol={2}
          row={1}
          style={{
            backgroundColor: "red"
          }}
          isHorizontal={false}
        >
          <label>col= 1-2 & row= 1</label>
          <Cell />
        </GridItem>
        <GridItem
          col={2}
          row={2}
          style={{
            backgroundColor: "red"
          }}
          isHorizontal={false}
        >
          <label>col= 2 & row= 2</label>
          <Cell />
        </GridItem>
        <GridItem
          col={2}
          row={3}
          style={{
            backgroundColor: "red"
          }}
          isHorizontal={false}
        >
          <label>col= 2 & row= 3</label>
          <Cell />
        </GridItem>
        <GridItem
          isHorizontal={false}
          style={{
            backgroundColor: "red"
          }}
          col={2}
          toCol={3}
          row={4}
          toRow={7}
        >
          <label>col= 2-3 & row= 4-7</label>
          <Cell
            component="textarea"
            style={{
              flex: "1"
            }}
          />
        </GridItem>
        <GridItem
          style={{
            backgroundColor: "red"
          }}
          col={2}
          row={8}
          isHorizontal
        >
          <label>col= 2 & row= 8</label>
          <Cell
            style={{
              flex: "1"
            }}
          />
        </GridItem>
        <GridItem
          style={{
            backgroundColor: "red"
          }}
          col={3}
          row={8}
          isHorizontal
        >
          <label>col= 3 & row= 8</label>
          <Cell
            style={{
              flex: "1"
            }}
          />
        </GridItem>
        <GridItem
          style={{
            backgroundColor: "red"
          }}
          col={1}
          row={2}
          toRow={9}
          isHorizontal={false}
        >
          <label>col= 2 & row=2- 9</label>
          <Cell
            component="textarea"
            style={{
              flex: "1"
            }}
          />
        </GridItem>
        <GridItem col={2}>
          <button
            type="submit"
            style={{
              width: "80%",
              margin: "0 auto"
            }}
          >
            login
          </button>
        </GridItem>
      </Grid>
    </Form>
  </Folio>
));
