import React from "react";
import { IceCream } from "../../assets/icons";
import { Card } from "../../common-components/card/card";
import { Colors } from "../../helpers/colors";
import { googleViewImageURI } from "../../helpers/constants";

export const Salutation = () => {
  return (
    <Card
      headerContent={'Lorem Ipsum Dolor'}
      centerContent={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae, nulla provident voluptate nesciunt nihil. Eos quam, laboriosam dignissimos quia quae dolores, expedita consectetur corporis totam aut molestias deleniti pariatur?'}
      backgroundImageUrl={`${googleViewImageURI}1ujBkDq3uQ8LO6TP_1MstdjlyfB3wUHmt`}
      footerContent={'Lorem ipsum dolor sit amet consectetur adipisicing'}
      iconComponent={<IceCream />}
      footerBgColor={Colors.Blue}
    />
  )
}