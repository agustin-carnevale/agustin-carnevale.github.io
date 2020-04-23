import React from 'react';

const LanguagesSection = ()=>(
    <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="languages"
    >
    <div className="w-100">
        <h2 className="mb-5">Languages</h2>
        <ul className="fa-ul mb-0">
            <li>
            <i className="fa-li fa fa-book text-warning"></i>
            Spanish (native)
            </li>
            <li>
            <i className="fa-li fa fa-book text-warning"></i>
            English (intermediate+/advanced)
            </li>
            <li>
            <i className="fa-li fa fa-book text-warning"></i>
            French &amp; Italian (very basic understanding)
            </li>
            <li>
            <i className="fa-li fa fa-book text-warning"></i>
            Learning Russian
            </li>
        </ul>
    </div>
</section>
)

export default LanguagesSection