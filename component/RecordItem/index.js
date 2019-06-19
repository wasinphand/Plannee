import React, { useState } from "react";
import LCRBox from "../LCRBox";
import VBox from "../VBox";
import HBox from "../HBox";

import FastfoodIcon from "@material-ui/icons/Fastfood";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Collapse, Input } from "@material-ui/core";

import { merge } from "lodash";
import InlineInput from "../InlineInput";

export default function RecordItem(props) {
  const [showAction, setShowAction] = useState(false);

  return (
    <VBox>
      <ButtonBase
        style={{ textAlign: "left" }}
        onClick={() => setShowAction(!showAction)}
      >
        <LCRBox
          left={
            <div style={{ alignSelf: "flex-start", marginTop: 3 }}>
              <FastfoodIcon style={{ marginRight: 5 }} />
            </div>
          }
          center={
            <VBox>
              <div>{props.category}</div>
              <div>{props.note}</div>
            </VBox>
          }
          right={
            <div
              style={{
                whiteSpace: "nowrap",
                alignSelf: "flex-start",
                marginLeft: 5
              }}
            >
              {props.value} บาท
            </div>
          }
        />
      </ButtonBase>

      <LCRBox
        left={
          <div style={{ alignSelf: "flex-start", marginTop: 3 }}>
            <FastfoodIcon style={{ marginRight: 5 }} />
          </div>
        }
        center={
          <VBox>
            <div>{props.category}</div>
            <InlineInput defaultValue="dasddas" />
          </VBox>
        }
        right={
          <div
            style={{
              whiteSpace: "nowrap",
              alignSelf: "flex-start",
              marginLeft: 5
            }}
          >
            <HBox>
              <InlineInput defaultValue="dasddas" style={{ minWidth: 75 }} />
              <div>บาท</div>
            </HBox>
          </div>
        }
      />
    </VBox>
  );
}
