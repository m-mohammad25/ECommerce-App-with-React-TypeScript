type TrendCardProps = {
  imgSrc: string;
  title: string;
  linkTarget: string;
  date: string;
};

import "./style.css";

function TrendCard({ imgSrc, title, linkTarget, date }: TrendCardProps) {
  return (
    <div className="l-news">
      <div className="news-img">
        <img src={imgSrc} alt="img" />
      </div>
      <div className="news-conte">
        <div className="date-news">
          <p>
            <i className="bx bxs-calendar" /> {date}
          </p>
          <h4>{title}</h4>
          <a href={linkTarget} target="_blank">
            read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrendCard;
