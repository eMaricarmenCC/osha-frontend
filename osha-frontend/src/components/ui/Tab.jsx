import { useState } from "react";
import '../../styles/Tab.css';

function Tab() {

  const [toggleState, setToggle] = useState(1);

  const toggleTab = (index) => {
      setToggle(index);
  }

  return (
    <div className="tab-container">
      <div className="tabs">
        <div className={toggleState === 1 ? "tab-item active" : "tab-item"} onClick={() => toggleTab(1)}>Tab 1</div>
        <div className={toggleState === 2 ? "tab-item active" : "tab-item"} onClick={() => toggleTab(2)}>Tab 2</div>
        <div className={toggleState === 3 ? "tab-item active" : "tab-item"} onClick={() => toggleTab(3)}>Tab 3</div>
      </div>
      <div className="tab-content">
        <div className={toggleState === 1 ? "tab-pane active" : "tab-pane"}>
          <h2>Content 1</h2>
        </div>
      </div>
      <div className="tab-content">
        <div className={toggleState === 2 ? "tab-pane active" : "tab-pane"}>
          <h2>Content 2</h2>
        </div>
      </div>
      <div className="tab-content">
        <div className={toggleState === 3 ? "tab-pane active" : "tab-pane"}>
          <h2>Content 3</h2>
        </div>
      </div>
    </div>
  )
}

const SimpleTab = ({activeKey, children}) => {

  const [key, setKey] = useState(activeKey);

  return (
    <div className="tab-container">
      <div className="tabs">
        {children.map(item => {
          return(
            <div key={item.props.akey} className={key === item.props.akey ? "tab-item active" : "tab-item"}
              onClick={() => setKey(item.props.akey)}>
              {item.props.title}
            </div>
          )
        })}
      </div>
      <div className="tab-content">
        {children.map(item => {
          return(
            <div key={item.props.akey} className={key === item.props.akey ? "tab-pane active" : "tab-pane"}>
              <h2>{item.prop}</h2>
              <p>{item.props.children}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const TabSections2 = ({activeKey, sections}) => {

  const [key, setKey] = useState(activeKey);

  return (
    <div className="tab-container">
      <div className="tabs">
        {sections.map((SectionComponent, index) => (
          <div
            key={index}
            className={key === index ? "tab-item active" : "tab-item"}
            onClick={() => setKey(index)}
          >
            {`Sección ${index + 1}`}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {sections.map((SectionComponent, index) => (
          <div
            key={index}
            className={key === index ? "tab-pane active" : "tab-pane"}
          >
            <SectionComponent />
          </div>
        ))}
      </div>
    </div>
  )
}

const TabSections = ({ activeKey, sections }) => {
  const [activeTab, setActiveTab] = useState(activeKey);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-container">
      <div className="tabs">
        {sections.map((SectionComponent, index) => (
          <div
            key={index}
            className={`tab-item ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {`Sección ${index + 1}`}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {sections.map((SectionComponent, index) => (
          <div
            key={index}
            className={`tab-pane ${activeTab === index ? "active" : ""}`}
          >
            <SectionComponent key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export {Tab, SimpleTab, TabSections}