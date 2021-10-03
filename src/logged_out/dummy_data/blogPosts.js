import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";

const content1 = (
  <Fragment>
    <Typography variant="h6" paragraph>
    What is the interest to get AlpsHunks 1st generation ?
    </Typography>
    <Typography paragraph>
      All 1st generation AlpsHunks owners will share 30% of the total amount of the 2nd generation mint distributed by sales level of the second generation.

      This will make 2.61 $AVAX / AlpsHunks because there will be 9 000 Alpshunks V2 of which 300 will be reserved for the Airdrop at a price of 1 $AVAX.
    </Typography>
    <Typography paragraph>
    In addition, each address that owns 1st generation AlpsHunks with a rarity higher than Rare will get an Airdrop of 2nd generation AlpsHunks.

    Once both generations are sold out the marketplace will be unveiled and each sale will earn a 4% fee distributed to the holders of both generations
    </Typography>
    <Typography variant="h6" paragraph>
      How do I know how rare my AlpsHunks 1st Generation is ?
    </Typography>
    <Typography paragraph>
    The rarity of AlpsHunks is divided in 5 categories for the first generation :
    </Typography>
    <Typography paragraph>
      <Typography paragraph>
      Legendary
    </Typography>
    <Typography paragraph>
    Mythic
    </Typography>
      <Typography paragraph>
    Rare
    </Typography>
    <Typography paragraph>
    Uncommon
    </Typography>
    <Typography paragraph>
    Common
    </Typography>
      To recognize their rarity you only have to look at the position.

      Also, AlpsHunks with different backgrounds will have some surprises! Stay tuned!
    </Typography>
  </Fragment>
);



const content = (
  <Fragment>
    <Typography variant="h6" paragraph>  
      What will the second generation be based on ?
    </Typography>
    <Typography paragraph>

    The second generation of 9000 AlpsHunks will be composed of 150 different accessories but also different backgrounds and positions.

    </Typography>
    <Typography variant="h6" paragraph>
    When will the Airdrop be distributed ?
    </Typography>
    <Typography paragraph>
    It will be distributed to owners of 1st Generation Alpshunks that have a rarity higher than Rare.

    The entire Airdrop will be distributed once the 1st generation will be fully minted
    </Typography>
  </Fragment>
);



const posts = [
  {
    title: "AlpsHunks 1st generation",
    id: 1,
    date: 1576341900,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost1.jpg`,
    snippet:
   " What is the interest to get AlpsHunks 1st generation ?",
    content: content1,
  },
  {
    title: "AlpsHunksV2",
    id: 2,
    date: 1576391600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost2.jpg`,
    snippet:
    "",
    content: content,
  },
  {
    title: "Post 3",
    id: 3,
    date: 1577391600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost3.jpg`,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content,
  },
  {
    title: "Post 4",
    id: 4,
    date: 1572281600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost4.jpg`,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content,
  },
  {
    title: "Post 5",
    id: 5,
    date: 1573281600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost5.jpg`,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content,
  },
  {
    title: "Post 6",
    id: 6,
    date: 1575281600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost6.jpg`,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content,
  },
];

export default posts;