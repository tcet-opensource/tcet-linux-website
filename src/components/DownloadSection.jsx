import React from 'react';

export default function MyComponent() {
    return (
        <div className="w-full h-96 absolute float overflow-scroll top-1/4 bg-custom-bg bg-opacity-100 bg-cover">
            <div className="text-content float-left flex flex-col ml-10 mt-20">
                <div className="text-white text-2xl sm:text-3xl lg:text-6xl mb-9">Downloads</div>
                <p className="text-white text-xl">
                    TCET Linux source code and installers are available for download for all versions!!
                </p>
                <div className="btns flex flex-row flex-wrap items-center text-white">
                    <div className="download-icon flex flex-row bg-blue-700 w-fit py-2 px-5 cursor-pointer mt-4 mr-2 rounded-full">
                        <button>Download</button>
                        &nbsp;
                        <img className="mt-1 w-5 h-5" src="images/download-icon.png" alt="" />
                    </div>
                    <div className="requirements flex flex-row w-fit py-2 px-5 cursor-pointer mt-4 rounded-full border border-white">
                        <button>Requirements</button>
                        &nbsp;
                        <img className="mt-1 w-4 h-full" src="images/requirements-icon.png" alt="" />
                    </div>
                    <div className="verfify-downloads underline underline-offset-4 flex h-fit ml-3">
                        <a className="mt-4" href="#">
                            Verify your downloads &rarr;
                        </a>
                    </div>
                </div>
            </div>
            <div className="image-content hidden lg:block float-right">
                <img className="w-80 h-60 mt-20 mr-5" src="images/man-with-laptop.png" alt="" />
            </div>
        </div>

    );
}
