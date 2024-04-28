
import { FaStar, FaStarHalf } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;

  const fullStarElements = Array(fullStars).fill(<FaStar />);

  let halfStarElement = null;

  if (decimalPart > 0) {
    halfStarElement = <FaStarHalf />;
  }

  return (
    <>
      {fullStarElements} {halfStarElement}
    </>
  );
};

export default Rating;
