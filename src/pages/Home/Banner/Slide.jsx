import PropTypes from 'prop-types';


const Slide = ({ slide, nextSliderId, previousSliderId }) => {
    const { _id, img, title, shortDescription } = slide;
    return (
        <>
            <div id={_id} className="carousel-item relative w-full">
                <img src={img} className="w-full" />
                <div className="absolute h-full flex items-center w-2/3 space-y-7 text-white bg-gradient-to-r from-[#111] to-[#07070700] p-12">
                    <div className='w-2/3 space-y-7'>
                        <h2 className="text-6xl font-bold">{title}</h2>
                        <p>{shortDescription}</p>
                        <div>
                            <button className="btn btn-primary me-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={'#' + previousSliderId} className="btn btn-circle me-4">❮</a>
                    <a href={'#' + nextSliderId} className="btn btn-circle">❯</a>
                </div>
            </div>
        </>
    );
};

Slide.propTypes = {
    slide: PropTypes.object.isRequired,
    nextSliderId: PropTypes.string.isRequired,
    previousSliderId: PropTypes.string.isRequired
}

export default Slide;