import SectionContainer from "../components/containers/SectionContainer.style";
import TitleH2 from "../components/fonts/TitleH2.style";
import blogsData from "../data/blogs.data";
import FlexColumn from "../components/containers/FlexColumn.style";
import Heading4 from "../components/fonts/Heading4.style";
import { AboutP } from "../components/fonts/P.style";
import { ImArrowUpRight2 } from "react-icons/im";
import Anchor from "../components/others/Anchor.style";
import FlexRow from "../components/containers/FlexRow.style";
import CardWrapper from "../components/others/CardWrapper.style";

const convertDate = (timestamp) => {
  const date = new Date(timestamp);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const Blogs = () => {
  return (
    <SectionContainer id="blogs">
      <TitleH2 $number="3">Things I’ve Written Recently</TitleH2>
      <FlexColumn $gap="20px">
        {blogsData.map(({ postId, post }) => {
          const {
            title,
            previewContent: { subtitle },
            firstPublishedAt,
            readingTime,
            mediumUrl,
          } = post;
          return (
            <CardWrapper key={postId} $gap="10px" $column>
              <Anchor to={mediumUrl} target>
                <FlexRow>
                  <Heading4>{title}</Heading4>
                  <ImArrowUpRight2 />
                </FlexRow>
              </Anchor>
              <AboutP>{subtitle}</AboutP>
              <AboutP>
                Published on {convertDate(firstPublishedAt)} ·{" "}
                {Math.round(readingTime)} min read
              </AboutP>
            </CardWrapper>
          );
        })}
      </FlexColumn>
    </SectionContainer>
  );
};

export default Blogs;
