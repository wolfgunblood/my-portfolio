import './Image.scss';

const Imgae = ({source} :any) => {
  return (
    <div className='skill-tab-item'>
        <img 
            src={source} 
            alt="skill-tab"
            className='skill-tab-item' 
        />
    </div>
  )
}

export default Imgae