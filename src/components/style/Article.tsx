import styled from "styled-components";

const Article = styled.article`
  &.content {
    box-sizing: border-box;
    max-width: 800px;
    width: 100%;
    padding: 56px 72px;
    margin: 40px auto 120px;
    background: #fafafa;
    box-shadow: 0 6px 12px 1px rgba(50, 50, 120, 0.1);

    img {
      width: 100%;
      height: auto;
    }
    .title {
      color: #234556;
    }
    .postDate {
      color: #b2b2ca;
      font-size: 14px;
      .created,
      .updated {
        display: inline-block;
        time {
          padding-left: 4px;
        }
      }
      .created {
        margin-right: 16px;
      }
    }
    .item {
      color: #234556;
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
      }
      h2 {
        margin: 40px 0 24px;
      }
      p {
        margin: 24px 0 24px;
        color: #454865;
        font-size: 16px;
        line-height: 2;
        strong {
          //color: #404079;
          color: #bd2e9e;
          //background: #e3e9f2;
          background: #ededf6;
          padding: 0 10px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          font-weight: normal;
          border-radius: 2px;
          letter-spacing: 0.02em;
        }
        &.item__description {
          margin: 48px 0 56px;
          padding-bottom: 32px;
          border-bottom: 1px solid #d2d2da;
        }
      }

      a {
        color: #0a7eb8;
        &:visited {
          color: #0a7eb8;
        }
      }
      pre {
        //background: #ededf6;
        background: #1d232f;
        color: #d6d7e1;
        font-size: 15px;
        letter-spacing: 0.03em;
        line-height: 1.75;
        padding: 16px 24px;
        white-space: pre-wrap;
      }
      blockquote {
        padding: 20px 32px;
        margin: 0;
        font-size: 14px;
        line-height: 1.75;
        letter-spacing: 0.01em;
        color: #595979;
        background: #ededf6;
      }
    }
  }
`;

export default Article;
