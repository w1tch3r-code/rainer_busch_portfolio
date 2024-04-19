import PropTypes from 'prop-types';
import './Skills.scss';

const SkillItem = ({img, alt}) => {
	return <div className='div__skill'><img src={img} alt={alt} /></div>;
};

SkillItem.propTypes = {
	img: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
}

export default SkillItem;
