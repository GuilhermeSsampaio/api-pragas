import React from "react";
// @ts-ignore
import { useHistory } from "react-router-dom";
// @ts-ignore
import { Box, Flex, Grid, GridItem } from "@strapi/design-system";
// @ts-ignore
import { ContentBox, useTracking } from "@strapi/helper-plugin";
import {
  FeatherSquare,
  InformationSquare,
  ChartBubble,
  Crown,
  Write
} from "@strapi/icons";
import { useIntl } from "react-intl";
import styled from "styled-components";

const BlockLink = styled.a`
  text-decoration: none;
`;

// @ts-ignore
const StyledChartBubble = styled(ChartBubble)`
  path {
    fill: #7289da !important;
  }
`;

// @ts-ignore
const StyledInformationSquare = styled(InformationSquare)`
  path {
    stroke: #7289da !important;
  }
`;

// @ts-ignore
const StyledCrown = styled(Crown)`
  path {
    fill: #7289da !important;
    stroke: #7289da !important;
  }
`;

// @ts-ignore
const StyledFeatherSquare = styled(FeatherSquare)`
  path {
    stroke: #7289da !important;
  }
`;

const ContentBlocks = () => {
  const { formatMessage } = useIntl();
  // @ts-ignore
  const { trackUsage } = useTracking();

  const { push } = useHistory();
  const navigate = (e, url) => {
    e.preventDefault();
    push(url);
  };

  return (
    <Flex direction="column" alignItems="stretch" gap={5}>
      <Grid gap={5}>
        <GridItem col={3}>
          <BlockLink
            href="#"
            onClick={(e) => {
              navigate(
                e,
                "/content-manager/collectionType/api::autor.autor?page=1&pageSize=10&sort=name:ASC"
              );
            }}
          >
            <ContentBox
              title={formatMessage({
                id: "dashbored.posts.title",
                defaultMessage: "Autores",
              })}
              subtitle={formatMessage({
                id: "dashbored.posts.label",
                defaultMessage: "Editar autores",
              })}
              icon={<InformationSquare />}
              iconBackground="primary100"
            />
          </BlockLink>
        </GridItem>
        <GridItem col={3}>
          <BlockLink
            href="#"
            onClick={(e) => {
              navigate(
                e,
                "/content-manager/collectionType/api::capitulo.capitulo?page=1&pageSize=10&sort=title:ASC"
              );
            }}
          >
            <ContentBox
              title={formatMessage({
                id: "dashbored.projects.title",
                defaultMessage: "Editar Capítulos",
              })}
              subtitle={formatMessage({
                id: "dashbored.projects.subtitle",
                defaultMessage: "Editar capítulos",
              })}
              icon={<Write />}
              iconBackground="primary100"
            />
          </BlockLink>
         </GridItem>
      </Grid>
    </Flex>
  );
};

export default ContentBlocks;
