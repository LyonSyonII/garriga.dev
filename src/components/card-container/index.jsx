import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';
// import LazyImage from '../lazy-image';

const displaySection = (children) => {
  if (children && Array.isArray(children) && children.length) {
    return true;
  } else {
    return false;
  }
};

const CardContainer = ({ title, loading, children }) => {
  const renderSkeleton = () => {
    return children;
    /*
    let array = [];
    for (let index = 0; index < children.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-6 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        width: 'w-32',
                        height: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div className="avatar w-full h-full">
                      <div className="w-16 h-16 mask mask-squircle mx-auto">
                        {skeleton({
                          width: 'w-full',
                          height: 'h-full',
                          shape: '',
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      {skeleton({
                        width: 'w-full',
                        height: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                    <div className="mt-2 flex items-center flex-wrap justify-center">
                      {skeleton({
                        width: 'w-full',
                        height: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return array;
    */
  };

  const renderChildren = () => {
    return children;
    /*
    return children.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer"
        key={index}
        href={item.link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="p-6 h-full w-full">
          <div className="flex items-center flex-col">
            <div className="w-full">
              <div className="px-4">
                <div className="text-center w-full">
                  <h2 className="font-semibold text-lg tracking-wide text-center opacity-60 mb-2">
                    {item.title}
                  </h2>
                  {item.imageUrl && (
                    <div className="avatar opacity-90">
                      <div className="w-16 h-16">
                        <LazyImage
                          src={item.imageUrl}
                          alt={'thumbnail'}
                          placeholder={skeleton({
                            width: 'w-full',
                            height: 'h-full',
                            shape: '',
                          })}
                        />
                      </div>
                    </div>
                  )}
                  <p className="mt-1 text-base-content text-opacity-60 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    ));
    */
  };

  return (
    <Fragment>
      {displaySection(children) && (
        <div className="col-span-1 lg:col-span-1">
          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-1">
              <div className="card compact bg-base-100 shadow bg-opacity-70">
                <div className="card-body">
                  <div className="mx-3 flex items-center justify-between mb-2">
                    <h5 className="card-title">
                      {loading ? (
                        skeleton({ width: 'w-40', height: 'h-8' })
                      ) : (
                        <span className="text-base-content opacity-70">
                          {title}
                        </span>
                      )}
                    </h5>
                  </div>
                  <div className="col-span-1">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      {loading ? renderSkeleton() : renderChildren()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

CardContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object,
};

export default CardContainer;