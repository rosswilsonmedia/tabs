import React, {useState} from 'react';

const Tabs = props => {
    const [item, setItem] = useState(props.tabs[0].item);
    const [content, setContent] = useState(props.tabs[0].content);

    const onClickHandler = (e, tab, content) => {
        setItem(tab);
        setContent(content);
    }
    return (
        <div class="Tabs">
            {
                props.tabs.map( (tab) => {
                    return (
                        tab.item==item?
                        <button
                            id={tab.item}
                            class="tab active-tab"
                            onClick={ (e) => onClickHandler(e, tab.item, tab.content) }
                        >
                            { tab.item }
                        </button>:
                        <button
                            id={tab.item}
                            class="tab"
                            onClick={ (e) => onClickHandler(e, tab.item, tab.content) }
                        >
                            { tab.item }
                        </button>
                    )
                })
            }
            <div class='result'>{content}</div>
        </div>
    );
}

export default Tabs;