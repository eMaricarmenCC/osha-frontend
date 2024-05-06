import { useState } from "react";
import '../../styles/Tab.css';

function Tab() {

    const [toggleState, setToggle] = useState(1);

    const toggleTab = (index) => {
        setToggle(index);
    }

    return (
        <div className="">

            <div className="tabs">
                <div
                    className={toggleState === 1 ? "tab-item active" : "tab-item"}
                    onClick={() => toggleTab(1)}
                >Tab 1</div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Tab 2</div>
                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Tab 3</div>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <h2>Content 1</h2>
                </div>
                <div></div>
            </div>

            <div className="content">
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <h2>Content 2</h2>
                </div>
                <div></div>
            </div>

            <div className="content">
                <div className={toggleState === 3 ? "content active-content" : "content"}>
                    <h2>Content 3</h2>
                </div>
                <div></div>
            </div>

        </div>
    )
}
export {Tab}