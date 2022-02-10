import React, { useState } from 'react';

const Tab = ({ data }) => {
  const [selected, setSelected] = useState(0);

  const onClickTab = (index) => {
    setSelected(index);
  };

  const renderProjects = (jdContent = []) => {
    if (jdContent.length === 0) {
      return null;
    }
    return jdContent.map((content) => {
      return (
        <div className="mb-4" key={content}>
          <div>
            <span className="text-primary mr-2">►</span>
            {content}
          </div>
        </div>
      );
    });
  };

  const renderTab = () => {
    return data.map((coy, index) => {
      const currentColor =
        selected === index
          ? 'text-primary bg-selectedColor'
          : 'text-descriptionColor';
      const labelColor =
        selected === index ? 'bg-primary' : 'bg-sectionSecondaryColor';
      return (
        <div
          className="inline-flex flex-col-reverse md:grid md:grid-cols-[1fr_9fr]"
          key={coy.companyName}
        >
          <div className={`h-1 md:h-full md:pb-8 transition-all ${labelColor}`}>
            &nbsp;
          </div>
          <div>
            <div
              className={`cursor-pointer p-4 transition-all w-100 ${currentColor} md:pr-0 `}
              onClick={() => onClickTab(index)}
            >
              {coy.companyName}
            </div>
          </div>
        </div>
      );
    });
  };

  const renderContent = () => {
    const currentContent = data[selected];
    const {
      companyName,
      companyUrl,
      employmentPeriod,
      employmentPosition,
      jdContent,
    } = currentContent;
    const { description: jd } = jdContent;
    return (
      <div>
        <div className="font-bold text-white mb-1">
          {employmentPosition}{' '}
          <a
            href={companyUrl}
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            @ <span className="underline">{companyName}</span>
          </a>
        </div>
        <div className="text-descriptionColor mb-4">{employmentPeriod}</div>
        <div className="text-descriptionColor">{renderProjects(jd)}</div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-[350px] md:h-[250px] md:flex-row">
      <div className="md:w-1/5 whitespace-nowrap overflow-scroll">
        {renderTab()}
      </div>
      <div className="pt-1 md:w-4/5 md:pl-8 md:pt-4">{renderContent()}</div>
    </div>
  );
};

export default Tab;
